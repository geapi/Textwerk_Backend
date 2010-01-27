require 'csv'

# This class implements a Google Visualization APIs Datasource, as defined
# here: http://code.google.com/intl/it/apis/visualization/documentation/dev/implementing_data_source.html.
#
# It is expected to be used inside a Rails application, as it relies on some
# Rails-specific methods (such as +to_json+).
#
# You can use it to wrap your custom data into a json, csv, or html output 
# compliant with the Google Visualization APIs specifications.
#
# Google Visualization APIs define a standard format to express tabular data
# with typed columns. By exposing your data in such format, you can use all 
# the existing visualizations conforming to the specification out-of-the-box
# to represent and analyze your data.
#
# You can read more about the GViz API here: http://code.google.com/apis/visualization.
#
# It implements most of the standard with the exclusion of:
#   * Query language (+tq+ parameters)
#   * Caching (+sig+ parameters)
#   * some warnings and error types in the JSON response
#
# It supports version 0.5 of the APIs.
#
# It should be used together with +gviz_base_controller.rb+, that provides
# the wiring logic and utilities for Rails controllers to expose GViz 
# datasources.
# 
# == Basic Use
# The basic use follows this pattern:
#   * create an instance from the request +params+ using the +from_params+
#     factory method.
#   * verify that the instance is valid
#   * add columns to the visualization, using +add_col+.
#   * add a dataset to the visualization, using +set_data+.
#   * invoke the +response+ method to return the datasource formatted according
#     to the GViz APIs in the requested format.
#
# Depending on the request parameters, +response+ will either return a json or
# csv response. When an html response is requested, nothing is returned by
# this class itself can be passed to a Rails view to generate the HTML report.
#
# The dataset is expected to be a 2-dimensional array (the first index
# referencing the rows, the second the columns). More generally, it can
# be anything that supports a 2 nested iteration cycles: the first on rows, the
# second on columns.
#
# The columns ordering in the dataset must match the order used to add them
# via the +add_col+ method. Aka, +add_col+ must be invoked for each column in 
# the same order used by the dataset (and expected in the produced output).
#
# == Example
# The following is a basic example of use. Refer to +gviz_base_controller.rb+
# for some utils to skip all the boilerplate code.
#
#  class YourController < ApplicationController
#    def yourmethod
#      data = [
#        [ Date.today, 'hello', 10 ],
#        [ Date.today - 1, 'world', 20 ]
#      ]
#      @gviz = Gviz.from_params(params)
#      if @gviz.valid?
#        @gviz.add_col('date', :id => 'A' , :label => 'Date').
#              add_col('string', :id => 'B' , :label => 'Name').
#              add_col('number', :id => 'C', :label => 'Count')
#              set_data(data)
#        render :json => @gviz.response
#      else
#        ... handle error ...
#      end
#    end
#  end
#
# == Author
# Riccardo Govoni [battlehorse@gmail.com]
#
# == Copyright
# Copyright(c) 2008 - bayes-swarm project.
# Licensed under the Apache2 License.
#
class Gviz
  
  attr_reader :data, :cols, :errors
  
  # Factory method to create a GViz instance from the request parameters.
  # +tqx:out+ is used to determine the specific class instance returned
  # by this method, depending on the requested output format.
  def self.from_params(params)
    # Exract GViz params from the request.
    gviz_params = {}
    tqx = params[:tqx]
    unless tqx.blank?
      gviz_params[:tqx] = true
      tqx.split(';').each do |kv|
        key, value = kv.split(':')
        gviz_params[key.to_sym] = value
      end
    end
    
    # Create the appropriate GViz instance from the gviz-specific parameters
    gviz_params[:out] ||= "json"    
    gviz = from_gviz_params(gviz_params)
  end 
  
  # Factory method to create a GViz instance from a serie of valid GViz
  # parameters, as described in the official documentation (see above links).
  # 
  # +gviz_params+ can be any map-like object that maps keys (like +:out+, +:reqId+
  # and so forth) to their values. Keys must be symbols.
  def self.from_gviz_params(gviz_params)
    case gviz_params[:out]
    when "json"
      JsonGviz.new(gviz_params)
    when "html"
      HtmlGviz.new(gviz_params)
    when "csv"
      CsvGviz.new(gviz_params)
    else
      InvalidGviz.new(gviz_params)
    end
  end
  
  # Creates a new instance and validates it. 
  def initialize(gviz_params)
    @params = gviz_params
    @errors = {}
    @cols = []
    @data = []
    @version = "0.5"
    @coltypes = [ "boolean", "number", "string", "date", "datetime", "timeofday"]
    @colkeys = [ :type, :id, :label, :pattern]
    
    validate
  end
  protected :initialize  
  
  # Access a GViz parameter. +k+ must be symbols, like +:out+, +:reqId+.
  def [](k)
    @params[k]
  end
  
  # Sets a GViz parameter. +k+ must be symbols, like +:out+, +:reqId+.
  # The instance is re-validated afterward.
  def []=(k, v)
    @params[k] = v
    validate
  end  
  
  # Checks whether this instance is valid (in terms of configuration parameters)
  # or not.
  def valid?
    @errors.size == 0
  end
  
  # Manually adds a new validation error. +key+ should be a symbol pointing
  # to the invalid parameter or element.
  def add_error(key, message)
    @errors[key] = message
    return self
  end
  
  # Adds a new column to the visualization. This method can be invoked as many
  # times as the number of columns to export in the visualiation. Invocations can
  # be chained.
  #
  # Invocation order is important! The same order will be expected when setting
  # the actual data and to produce the response.
  #
  # +type+ must be one of the supported GViz datatypes, or an +ArgumentError+ will
  # be raised. +params+ is an optional map to define extra column attributes. 
  # These include: +:id+, +:label+ and +:pattern+.
  def add_col(type, params=nil)
    raise ArgumentError("Invalid column type: #{type}") if !@coltypes.include?(type)
    params ||= {}
    params[:type] = type
    
    # TODO: passing a wront type in params bypasses the previous type check.
    @cols << params.delete_if { |k,v| !@colkeys.include?(k) }
    return self
  end
  
  # Sets the data to be exported. +data+ should be a 2-dimensional array. The 
  # first index should iterate over rows, the second over columns. Column 
  # ordering must be the same used in +add_col+ invokations.
  #
  # Anything that behaves like a 2-dimensional array and supports +each+ is
  # a perfectly fine alternative.
  def set_data(data)
    @data = data
    return self
  end

  # Validates this instance by checking that the configuration parameters
  # conform to the official specs.
  def validate
    @errors.clear
    if @params[:tqx]
      add_error(:reqId, "Missing required parameter reqId") unless @params[:reqId]
      
      if @params[:version] && @params[:version] != @version
        add_error(:version, "Unsupported version #{@params[:version]}")
      end
    end
  end
  
  # Empty method. This is a placeholder implemented by subclasses the 
  # produce the response according to a given format.
  def response
  end
end

# Specialization responsible for producing responses in JSON format.
class JsonGviz < Gviz
  
  def initialize(gviz_params)
    super(gviz_params)
    @responseHandler = "google.visualization.Query.setResponse"
  end
  
  # Returns the datasource in JSON format. It supports the +responseHandler+
  # parameter. All the errors are returned with the +invalid_request+ key.
  # Warnings are unsupported (yet).
  def response
    rsp = {}
    rsp[:version] = @version
    rsp[:reqId] = @params[:reqId] if @params.key?(:reqId)
    if valid?
      rsp[:status] = "ok"
      rsp[:table] = datatable unless data.nil?      
    else
      rsp[:status] = "error"
      rsp[:errors] = @errors.values.map do |error|
        { :reason => "invalid_request" , :message => error }
      end
    end
    "#{@params[:responseHandler] || @responseHandler}(#{rsp.to_json})"   
  end
  
  # Renders the part of the JSON response that contains the dataset.
  def datatable
    dt = {}
    dt[:cols] = cols
    dt[:rows] = []
    data.each do |datarow|
      row = []
      datarow.each_with_index do |datacell, colnum|
        row << { :v => convert_cell(datacell, cols[colnum][:type])  }
      end
      
      dt[:rows] << { :c => row }
    end
    return dt
  end
  protected :datatable
  
  # Converts a value in the dataset into a format suitable for the 
  # column it belongs to. 
  #
  # Datasets are expected to play nice, and try to adhere to the columns they
  # intend to export as much as possible. This method doesn't do anything more
  # than the very minimum to ensure a formally valid gviz export.
  def convert_cell(value, coltype)
    case coltype
    when "boolean"
      value ? 'true' : 'false'
    when "number"
      value
    when "string"
      value
    when "date"
      GvizDate.new(value)
    when "datetime"
      GvizDateTime.new(value)
    when "timeofday"
      [ value.hour, value.min, value.sec, value.usec / 1000 ]
    end
  end
  protected :convert_cell
  
end

# Utility class to produce a JSON rendering of dates compatible with 
# what the GViz APIs expect ( a Javascript date object )
class GvizDate  
  def initialize(date)
    @date = date
  end
  
  def to_json(options=nil)
    "new Date(#{@date.year}, #{@date.month-1}, #{@date.day})"
  end
end

# Utility class to produce a JSON rendering of datetimes compatible with 
# what the GViz APIs expect ( a Javascript date object )
class GvizDateTime
  def initialize(datetime)
    @datetime = datetime
  end
  
  def to_json(options=nil)
    "new Date(#{@date.year}, #{@date.month-1}, #{@date.day}, #{@date.hour}, #{@date.min}, #{@date.sec})"
  end
end

# Specialization responsible for producing responses in CSV format.
class CsvGviz < Gviz
  def response
    rsp = []
    CSV::Writer.generate(rsp) do |csv|
      csv << cols.map { |col| col[:label] || col[:id] || col[:type] }
      data.each do |datarow|
        csv << datarow
      end
    end
    return rsp.join
  end
end

# Specialization responsible for producing responses in HTML format.
# Invoking +response+ on this class doesn't do anything, as this class
# should be passed to a Rails view and generate HTML over there.
class HtmlGviz < Gviz
  # no need to answer anything ... response rendering is handled by
  # an erb template.
end

# Represents an invalid set of parameters. This is used only to guarantee
# a return value from the factory methods, even when parameters are wrong.
#
# Invoking +valid?+ on this class will sistematically return +false+. 
class InvalidGviz < Gviz
  def initialize(gviz_params)
    super(gviz_params)
    add_error(:out, "Invalid output format: #{gviz_params[:out]}. Valid ones are json,csv,html")
  end
end
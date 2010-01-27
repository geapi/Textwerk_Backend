# Helper class that simplifies the work of producing a Rails controller
# capable of exposing Google Visualization APIs datasources, as defined here:
# http://code.google.com/intl/it/apis/visualization/documentation/dev/implementing_data_source.html.
#
# This class requires +gviz.rb+ model class to work.
# A controller that wants to expose a GViz datasource should extend this class
# and interact with the +@gviz+ instance within a +gvizifier+ block as shown
# in the following example:
#
#   class MyGvizController < GvizBaseController
#     def mymethod
#       gvizifier do
#         data = [[ Date.today, 'hello', 10 ],
#                 [ Date.today - 1, 'world', 20 ]]
#         @gviz.add_col('date', :id => 'A' , :label => 'Date').
#               add_col('string', :id => 'B' , :label => 'Name').
#               add_col('number', :id => 'C', :label => 'Count')
#               set_data(data)
#     end
#   end
#
# The +gvizifier+ block takes care of all the boilerplate request handling:
#   * It creates the Gviz model and checks whether it's valid or not.
#     ( it skips block execution for invalid parameters and returns the
#       appropriate error message to the user )
#   * It invokes the correct renderer depending on the requested GViz output
#     format.
#
# The class also provides some helper method to manipulate datasources, such
# as composing and merging them.
# 
# It expects a +debughtml+ erb template to be available. Such template should
# take care of rendering a Gviz model object into an HTML table. It is used
# whenever the user requests an html output.
#
# == Author
# Riccardo Govoni [battlehorse@gmail.com]
#
# == Copyright
# Copyright(c) 2008 - bayes-swarm project.
# Licensed under the Apache2 License.
#
class GvizBaseController < ApplicationController
  
  protected
  
  # Helper method to handle all the boilerplate for GViz processing.
  # It expects a block that will receive an initialized and validated GViz model,
  # that can be used to fill the data to be exported.
  #
  # See the class docs for further info.
  def gvizifier
    @gviz = Gviz.from_params(params)
    if @gviz.valid?
      begin
        yield @gviz
      rescue ArgumentError => e
        @gviz.add_error(:id, e.message)        
      end
    end
    
    case @gviz[:out]
    when 'json'
      render :json => @gviz.response
    when 'csv'
      send_data(@gviz.response,
        :type => 'text/csv; charset=utf-8; header=present',
        :filename => @csv_filename || csv_filename )
    else
      # html or invalid output format
      render :action => 'debughtml'
    end    
  end
  
  # Utility method to explicitly define the name of the CSV file to be sent to
  # the user when he requests such format. 
  # The name is composed as an underscore-separated list of tokens, the first
  # one being the controller's +action+ that is handling the request and all
  # the remaining ones composed from the method arguments.
  def csv_filename(*tokens)
    @csv_filename = ([] << params[:action] << tokens).flatten.compact.join('_') + '.csv'
  end
end
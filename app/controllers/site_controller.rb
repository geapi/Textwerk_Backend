class SiteController < ApplicationController 
  def index
    #@doc = Array.new
    @doc = DocumentInfo.find(:all)
    @docContent = Array.new
     @doc.each_with_index do |d, i|
        @docContent << DocumentContent.find(:first, :conditions => "doc_name = '#{d.doc_name}'")
      end
    respond_to do |result|  
      result.html do
          # nothing extra to do
      end
      result.json do
        #results = @pubLib.map {|result| json_for_results(result) }
        results = Array.new
        @doc.each_with_index do |result, i|
          if i < 10
           results << json_for_results(result, i)
         end
         end
        render :json => { :content => results }
      end
      #result.js
    end

  end
  def json_for_results(result, index)
    #{d.doc_name}</h1><h2>#{d.doc_type}</h2><h2>#{d.date}</h2><h2>#{d.position}</h2>" %>
		#<%= "#{@docContent[i].content}
    #result.doc_name
    { 
      :name => result.doc_name,
      :doc_type => result.doc_type,
      :date => result.date,
      :position => result.position,
      :description => result.description
      #:content => @docContent[index].content
    }
    
  end
end

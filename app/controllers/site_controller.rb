class SiteController < ApplicationController 
  def index
    #@doc = Array.new
    @doc = DocumentInfo.find(:all)
    @docContent = Array.new
    @doc.each do |d|
      @docContent << DocumentContent.find(:first, :conditions => "doc_name = '#{d.doc_name}'")
    end
  end
end

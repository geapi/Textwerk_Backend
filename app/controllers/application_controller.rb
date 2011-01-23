# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.
require 'hpricot'
class ApplicationController < ActionController::Base
  include Logger::TextwerkLogger
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  
  # Scrub sensitive parameters from your log
  filter_parameter_logging :password
  def getDoc
    doc = DocumentInfo.find(:first)
    docContent = DocumentContent.find(:first, :conditions => "doc_name = '#{doc.doc_name}'")
    doc = open(docname) { |f| Hpricot(f) }
    doc.search("doc") do |document|
      #puts  "#{(document/"docno").first.inner_html}"
      #puts "#{document.inner_html}"
      docnumbers << (document/"docno").first.inner_html
    end
    return docnumbers
  end
  
end

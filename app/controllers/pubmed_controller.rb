require 'bio'
require "hpricot" # need hpricot and open-uri
require "open-uri"
Bio::NCBI.default_email = 'geapi@cs.umd.edu'
class PubmedController < ApplicationController
  def esummary(id)
    host = "www.ncbi.nlm.nih.gov"
    #http://eutils.ncbi.nlm.nih.govid=11850928,11482001&retmode=xml
    path = "/entrez/eutils/esummary.fcgi?db=pubmed&retmode=xml&id="


    http = Bio::Command.new_http(host)
    response = http.get(path + CGI.escape(id.to_s))
    result = response.body
    if result =~ /#{id}\s+Error/
      raise( result )
    else
      result = result.gsub("\r", "\n").squeeze("\n").gsub(/<\/?pre>/, '')
      return result
    end
  end
  def index
    if request.post?
      require 'pp'
      @params = params.pretty_inspect
       optionsAll = {
          'maxdate' => '2003/05/31',
          'retmax' => 100000,
          'email' => 'geapi@cs.umd.edu',
        }
      options = {
        'maxdate' => '2003/05/31',
        'retmax' => 100,
        'email' => 'geapi@cs.umd.edu',
      }
      keywords = params[:text] # "ovarian cancer p53"
      # PubMed keyword search
      @pubLib = Array.new 
      @allEntries  = Bio::PubMed.esearch(keywords,optionsAll) 
      @entries = Bio::PubMed.esearch(keywords,options)
      medline = esummary(@entries.join(','))
      d = Hpricot.XML(medline)
      (d/:DocSum).each do |a|
        entry = Hash.new
        entry[:id] =  a.at('Id').inner_html
        entry[:Date] = a.at("Item[@Name='PubDate']").inner_html
        autoren ="authors: "
        a.at("Item[@Name='AuthorList']").search('Item') do |author|
          if(!author.nil?)
            autoren += author.inner_html + ", "
          end
        end
        autoren += a.at("Item[@Name='LastAuthor']").inner_html
        entry[:Authors] = autoren
        entry[:Title] = a.at("Item[@Name='Title']").inner_html
        @pubLib << entry
      end
    end
  end
end
require 'bio'
require "hpricot" # need hpricot and open-uri
require "open-uri"
Bio::NCBI.default_email = 'geapi@cs.umd.edu'
class PubmedController < ApplicationController
  # customized esummary method for pubmed that allows to only pull the minumum of info needed
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
  end
  # method to get results from pubmed for a certain phrase
  # creates a hash @pubLib with formatted entries that has:
  # - id, Date, Authors (comma sep.), Title, PMCid (if found, for full text access) as keys to retrieve
  # does a 2 stage pull, 1) get ids for all results up to the specified retmax, 2) get the "full results" for the current page
  def searchPubmed 
      @params = params.pretty_inspect
      @resultsPerPage = params[:resultsPerPage] 
      @resultsPerPage = @resultsPerPage.to_i == 0 ? 20 : @resultsPerPage
      @currentPage = params[:page]
      if (request.xhr?)
      optionsAll = { # used to get the total number of results and all PMids for them
        'retmax' => 10000,
        'email' => 'geapi@cs.umd.edu',
      }
      options = {   # sets the "page" maximum of results
        'retmax' => 50,
        'email' => 'geapi@cs.umd.edu',
      }
      @keywords = params[:term]
      # pull at idds
      @allEntries  = Bio::PubMed.esearch(@keywords,optionsAll) 
      @currentPage = @currentPage.to_i == 0 ? 1 : @currentPage   # if we don't get the page, assume we want the first one
      @pubLib = getResults(@allEntries,@currentPage.to_i,@resultsPerPage.to_i)
      @maxPageNumber = (@allEntries.size().to_f/@resultsPerPage.to_f).ceil #make sure we always get the bigger number of pages
    end
    respond_to do |result|  
       result.html do
         @theTerm = params[:term]
         @triggerAjax = true
         render(:template => "pubmed/index")
      end
      result.js do 
         result.js 
      end
      #result.js
    end
  end
  # retrieves the actual content for the entries from pubmed
  def getResults (allEntryIds, page, resultsPerPage)
    pubLib = Array.new
    @startIndex =  (page-1)*resultsPerPage
    @endIndex = @allEntries.size() <= ((page-1)*resultsPerPage)+resultsPerPage ? @allEntries.size() :  ((page-1)*resultsPerPage)+resultsPerPage
    #puts "#{@startIndex} to #{@endIndex}"
    medline = esummary(allEntryIds.values_at(@startIndex ... @endIndex).join(','))
    d = Hpricot.XML(medline)  
    pubmedRank = @startIndex+1
    (d/:DocSum).each do |a|
      entry = Hash.new
      entry[:pubmedRank] = pubmedRank
      entry[:id] =  a.at('Id').inner_html
      entry[:Date] = a.at("Item[@Name='PubDate']").inner_html
      autoren = Array.new
      a.at("Item[@Name='AuthorList']").search('Item') do |author|
        if(!author.nil?)
          autoren.push "#{author.inner_html}"
        end
      end
      #autoren += a.at("Item[@Name='LastAuthor']").inner_html creates duplicate of LastAuthor, bad!
      entry[:Authors] = autoren
      entry[:Title] = a.at("Item[@Name='Title']").inner_html
      pmcid ="none" 
      if(a.at("Item[@Name='ArticleIds']").at("Item[@Name='pmc']"))
        pmcid = a.at("Item[@Name='ArticleIds']").at("Item[@Name='pmc']").inner_html
      end
      entry[:PMCid] = pmcid
      pubLib << entry
      pubmedRank += 1
    end 
    pubLib
  end
end
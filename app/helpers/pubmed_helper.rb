module PubmedHelper  
  def findSameAuthors() 
    @authorHash = Hash.new
    @pubLib.each do |entry| 
      authors = entry[:Authors].split(', ') 
      #puts "#{entry[:id]}"
      authors.each do |author|
        if (@authorHash.key?(author))
          #puts "got a match"
          @authorHash[author]  = @authorHash.fetch(author) + ",#{entry[:id]}"
        else
          @authorHash[author] = entry[:id]
        end

      end
    end
    cleanedDuplicates = Array.new  
    duplicates =""
    @authorHash.each do |dubs|
      if(dubs[1].split(",").size >1)
        dubs[1].split(",").each do |ids|
          duplicates += "#{dubs[0]}<br/>"
          cleanedDuplicates.push "#{dubs[0]}"
          break
        end
      end
    end 
    return cleanedDuplicates
  end 
  def getFirst
    first = "" 
    if (@currentPage.to_i > 2)
      first = "<a href=\"/pubmed/searchPubmed?method=get&amp;term=#{@keywords}&amp;page=1\" class=\"prev_page\">| &laquo; First</a>"
    end 
    first
  end
  def getLast
    lastPage = ""
    if (@currentPage.to_i < @maxPageNumber -2)
      lastPage = "<a href=\"/pubmed/searchPubmed?method=get&amp;term=#{@keywords}&amp;page=#{@maxPageNumber}\" rel=\"next\">Last &raquo; |</a>"
    end 
    lastPage
  end
  def getNext 
    nextPage = ""
    if (@currentPage.to_i < @maxPageNumber)
      nextPage = "<a href=\"/pubmed/searchPubmed?method=get&amp;term=#{@keywords}&amp;page=#{@currentPage.to_i+1}\" rel=\"next\">Next &raquo;</a>"
    end 
    nextPage
  end
  def getPrevious 
    previous = ""
    if (@currentPage.to_i > 1)
      previous = "<a href=\"/pubmed/searchPubmed?method=get&amp;term=#{@keywords}&amp;page=#{@currentPage.to_i-1}\" class=\"prev_page\">&laquo; Previous</a>"
    end
    previous
  end
end

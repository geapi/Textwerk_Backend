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
    duplicates =""
    @authorHash.each do |dubs|
      if(dubs[1].split(",").size >1)
        dubs[1].split(",").each do |ids|
          duplicates += "#{dubs[0]} in #{ids} <br/>"
        end
      end
    end 
    return duplicates
  end
end

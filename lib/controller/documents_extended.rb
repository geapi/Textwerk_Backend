module Controller
  
  module DocumentsExtended
    # add the collection id into the paper hash
    def get_paper_with_collection_id(paper, collection_id)
       paper_with_collection_id = Hash.new
       paper.attributes.each do | attr |
          #log_this attr[0].inspect
          paper_with_collection_id[attr[0]] = attr[1]
       end
       paper_with_collection_id['collection'] =  "#{collection_id}"
       paper_with_collection_id['referrer'] =  ""
       paper_with_collection_id['citee'] =  ""
       paper_with_collection_id
    end
  end
end
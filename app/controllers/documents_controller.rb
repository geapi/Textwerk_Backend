class DocumentsController < ApplicationController
  def index
    json_result = find_first_25
    if params[:coll]
      json_result = create_collection_for_first_25
    end
    if params[:id]
      json_result = [Paper.find(params[:id])]
    end
    respond_to do |wants|
      wants.json do 
        render :json => { :status => :ok, :content => json_result}
      end
    end
  end
  def find_all_years
    years = Paper.find( :all, :select => 'DISTINCT year', :order => 'year' )
    years
  end
  def find_first_25
    papers = Paper.find( :all, :limit => 25 )
  end
  def create_collection_for_first_25
    papers = find_first_25
    ids = Array.new
    papers.each do |p|
      ids << p.id
    end
    collection = [{
      :id => '1',
      :type => 'Collection',
      :name => 'ACL 1st 25 Collection',
      :papers => ids }]
  end
  
end

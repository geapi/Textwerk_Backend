class DocumentsController < ApplicationController
  include Controller::DocumentsExtended
  def index
    json_result = get_papers_with_collection_id("c_10", find_papers())
    if params[:year]
      year = params[:year]
      json_result = get_papers_with_collection_id("c_#{year}", find_papers_per_year(year))
    end
    if params[:coll]
      if params[:year]
        json_result = get_collection_for_year(year, find_papers_per_year(year) )
      else
        json_result = get_collections_for_years # [create_collection("c_10","ACL first 10 collection", find_papers(:limit => 10))]
      end
    end
    if params[:id]
      paper = Paper.find(params[:id])
      json_result = get_paper_with_collection_id(paper, 1)
    end
    respond_to do |wants|
      wants.json do 
        render :json => { :status => :ok, :content => json_result}
      end
    end
  end
  ######
  # papers
  ######
  def get_collections_for_years
    papers = find_all_years
    years_collection = Array.new
    papers.each do |paper|
      log_this "trying year #{paper.year}"
      years_collection << get_collection_for_year(paper.year, find_papers_per_year(paper.year))
    end
    years_collection
  end
  

  def get_papers_with_collection_id(collection_id, papers)
    paper_array = Array.new
    papers.each do |paper|
      paper_array << get_paper_with_collection_id(paper, "c_#{paper.year}")
    end
    paper_array
  end
  def find_papers_per_year(year)
    papers = Paper.find_all_by_year(year)
    log_this "#{papers.length} paper(s)"
    papers
  end
  def find_papers(conditions = {})
    Paper.find( :all, conditions )
  end
  ######
  # collections
  #######
  def get_collection_for_year(year, papers)
    if year.blank?
      year = "no year"
    end
    create_collection(year,"#{year}", papers)
  end
  def create_collection(id, name, papers)
      ids = Array.new
      papers.each do |p|
        ids << p.id
      end
      collection = {
        :id => "c_#{id}",
        :type => 'Collection',
        :name => name,
        :papers => ids }
  end
  ######
  # years
  #######
  def find_all_years
    Paper.find( :all, :select => 'DISTINCT year', :order => 'year' )
  end
  
end

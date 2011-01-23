class VenuesController < ApplicationController
  def index
    json_result = get_all_venues
    respond_to do |wants|
      wants.json do
        render :json => {:status => :ok, :content => json_result}
      end
    end
  end

  def get_all_venues
    papers = get_all_papers_for_venues
    venues = Array.new
    papers.each_with_index do |paper, i|
       v = "no venue"
      v = paper.venue unless paper.venue.blank?
      venue = {}
      venue.store("id", "#{i}_ven")
      venue.store("name", v)
      venues << venue
    end
    venues
  end

  def get_all_papers_for_venues
    Paper.find(:all, :select => 'DISTINCT venue',  :order => 'venue')
  end

end

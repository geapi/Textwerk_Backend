class AffiliationsController < ApplicationController
  def index
    json_result = get_all_affiliations
    respond_to do |wants|
      wants.json do
        render :json => {:status => :ok, :content => json_result}
      end
    end
  end
  def get_all_affiliations
    raw_affiliations = get_distinct_affiliations
    affiliations = Array.new
    raw_affiliations.each_with_index do |ra, i|
      affiliation = {}
      affi = "no affiliation"
      affi = ra.affiliation unless ra.affiliation.blank?

      affiliation.store("id", "#{i}_ven")
      affiliation.store("name", affi)
      affiliations << affiliation
    end
    affiliations
  end

  def get_distinct_affiliations
    AuthorAffiliations.find(:all, :select => 'DISTINCT affiliation',  :order => 'affiliation')
  end

end

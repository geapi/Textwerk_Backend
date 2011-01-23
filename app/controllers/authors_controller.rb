class AuthorsController < ApplicationController
  include Sproutcore::Controller
  def index
    json_result = get_all_authors
    respond_to do |wants|
      wants.json do
        render :json => { :status => :ok, :content => mapped_json(json_result)}
      end
    end
  end
  def get_all_authors
      Author.find( :all)
  end
end

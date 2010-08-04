class SiteController < ApplicationController 
  def index
    @docnumbers = readDoc
  end
end

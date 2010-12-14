class AclController < ApplicationController
  def index
    respond_to do |wants|
      wants.html {  }
      wants.json do
        render :json => "mooh" 
      end
    end
  end
end

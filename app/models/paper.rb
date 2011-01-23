# == Schema Information
#
# Table name: papers
#
#  id              :string(10)      not null, primary key
#  title           :string(255)     not null
#  year            :string(5)       not null
#  venue           :string(255)     not null
#  authors         :string(255)
#  author_ids      :string(255)
#  affiliation_ids :string(150)
#

class Paper < ActiveRecord::Base
  attr_accessor :collection
  def initialize
    super
    puts "initializing paper"
    @collection = 1
  end
end

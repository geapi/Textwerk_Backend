class AddIndices < ActiveRecord::Migration
  def self.up
    #
    # Add indexes
    #
    add_index :document_infos, :doc_name
    add_index :document_infos, :case_id
  end

  def self.down
  end
end

class CreateDocumentInfos < ActiveRecord::Migration
  def self.up
    create_table :document_infos do |t|
      t.string :doc_name
      t.string :doc_type
      t.decimal :case_id
      t.string :cite
      t.string :description
      t.string :date
      t.string :submitter_type
      t.string :postion

      t.timestamps
    end
  end

  def self.down
    drop_table :document_infos
  end
end

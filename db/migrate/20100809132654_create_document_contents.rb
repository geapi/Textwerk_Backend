class CreateDocumentContents < ActiveRecord::Migration
  def self.up
    create_table :document_contents do |t|
      t.string :doc_name
      t.text :content

      t.timestamps
    end
    add_index :document_contents, :doc_name
  end

  def self.down
    drop_table :document_contents
  end
end

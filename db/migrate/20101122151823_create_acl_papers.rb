class CreateAclPapers < ActiveRecord::Migration
  def self.up
    create_table :acl_papers do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :acl_papers
  end
end

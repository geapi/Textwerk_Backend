# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20100809132654) do

  create_table "document_contents", :force => true do |t|
    t.string   "doc_name"
    t.string   "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "document_contents", ["doc_name"], :name => "index_document_contents_on_doc_name"

  create_table "document_infos", :force => true do |t|
    t.string   "doc_name"
    t.string   "doc_type"
    t.integer  "case_id",        :limit => 10, :precision => 10, :scale => 0
    t.string   "cite"
    t.string   "description"
    t.string   "date"
    t.string   "submitter_type"
    t.string   "postion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "document_infos", ["case_id"], :name => "index_document_infos_on_case_id"
  add_index "document_infos", ["doc_name"], :name => "index_document_infos_on_doc_name"

end

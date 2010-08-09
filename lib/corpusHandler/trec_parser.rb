require 'rubygems'
require 'hpricot'
require 'ferret'
require 'fastercsv'
require 'active_record'  
require 'yaml'
require '../../app/models/document_info'
require '../../app/models/document_content'
include Ferret

class TrecParser
  attr_accessor :docname
  def initialize(args ={})
    dbconfig = YAML::load(File.open('db.yml'))
    ActiveRecord::Base.establish_connection(dbconfig)
    @docname = "2007-01-30-afaction-corpus.sgml"
  end
  # reads in the sgml file with the corpus and places it in the DocumentContent table
  def readDoc(docname)
    doc = open(docname) { |f| Hpricot(f) }
    doc.search("doc") do |document|
      documentObject = DocumentContent.new
      documentObject.doc_name =  "#{(document/"docno").first.inner_html}"
      (document/"docno").remove
      dok = document.inner_html.gsub("\n"," ")
      documentObject.content = dok
      #puts "#{document.inner_html.gsub("\n"," ")}"
      documentObject.save
    end
  end
  def testSearch
    index = Index::Index.new(:path => 'afac-index',
    :create_if_missing => false,
    :auto_flush => true)
    #doc = open(@docname) { |f| Hpricot(f) }
    # doc.search("doc") do |document|
    #puts "putting #{(document/"docno").first.inner_html} into index"
    #index << doc
    #end
    index.search_each('content:"fourteenth amendment"') do |id, score|
      puts "Document #{index[id][:content]} found with a score of #{score}"
    end


  end
  # parses the opinion and brief txt files and creates entries in the table
  # could create dubs and other confusion, use with care
  def parseTabFile(file2Parse, type)
    FasterCSV.foreach(file2Parse, options ={:col_sep => "\t", :headers => true}) do |row|
      doc = DocumentInfo.new
      if(type == "brief")
        doc.doc_name = row[0]
        doc.doc_type = type
        doc.case_id = row[1]
        doc.cite = row[2]
        doc.description = row[3]
        doc.date = row[4]
        doc.submitter_type = row[5]
        doc.postion = row[6]
        #puts "#{row}"
      elsif type=="opinion"
        doc.doc_name = row[0]
        doc.doc_type = type
        doc.case_id = row[1]
        doc.submitter_type = row[2]
      end
      doc.save
    end
  end
end

tp = TrecParser.new
tp.readDoc("2007-01-30-afaction-corpus.sgml")
#tp.testSearch
#tp.parseTabFile("briefs.txt", "brief")
#tp.parseTabFile("opinions.txt", "opinion")
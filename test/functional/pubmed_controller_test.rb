require 'test_helper'
#require 'bio'

class PubmedControllerTest < ActionController::TestCase
  # test the access to entrez to make sure it works, before blaming this app
  # needs a "proven" term and only tests if results are returned, no validity
  test "pubmed/entrez API access" do
    optionsAll = { # used to get the total number of results and all PMids for them
          'retmax' => 10000,
          'email' => 'geapi@cs.umd.edu',
        }
        term = "ovarian cancer p53"
        puts "connecting to entrez and trying to retrieve results for term \"#{term}\""
        allEntries  = Bio::PubMed.esearch(term,optionsAll)
        puts "got: #{allEntries.size} results"
        assert allEntries.size > 0 
  end
end

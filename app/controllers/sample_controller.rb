class SampleController < GvizBaseController
  def fruits
    gvizifier do |gviz|
      csv_filename('sample.csv')
      gviz.add_col('string', :id => 'name', :label => 'Name')
      gviz.add_col('string', :id => 'parent', :label => 'Parent')
      gviz.add_col('number', :id => 'quantity', :label => 'Quantity')            
      data = [
        [ "Apples", "Root", 0],
        [ "Braeburn", "Apples", 1],
        [ "Cox", "Apples", 2.2],
        [ "Golden Delicious", "Apples", 0],
        [ "English", "Golden Delicious", 1],
        [ "French", "Golden Delicious", 2],
        [ "Bananas", "Root", 0],
        [ "Caribbean", "Bananas", 2.5],
        [ "Central American", "Bananas", 1.5],
        [ "Clementines", "Root", 3]
      ]
      gviz.set_data(data)      
    end
  end
end

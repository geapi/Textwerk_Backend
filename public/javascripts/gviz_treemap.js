// namespace
var ns = {};

ns.TreeMap = function(container) {
  this.container = container;
  this.selectedRow = null;
};

ns.TreeMap.prototype.getSelection = function() {
  return [{row: this.selectedRow}];
}

ns.TreeMap.prototype.draw = function(data, options) {
  var self = this;
  
  // parse options and fallback to defaults for unspecified ones.
  options = options || {};
  options.width = options.width || '50%';
  options.height = options.height || 300;
  
  // create the required DOM elements
  var treeMapContainer = document.createElement('DIV');
  treeMapContainer.style.width = options.width;
  treeMapContainer.style.height = options.height - 20;
  treeMapContainer.style.backgroundColor = '#77A';
  this.container.appendChild(treeMapContainer);
  
  var statusBar = document.createElement('DIV');
  statusBar.style.height = 20;
  
  var backButton = document.createElement('BUTTON');
  backButton.innerHTML = 'Back';
  backButton.style.right = 0;
  statusBar.appendChild(backButton);
  
  var infoBox = document.createElement('SPAN');
  statusBar.appendChild(infoBox);
  
  this.container.appendChild(statusBar);
    
  // Parse the Gviz DataTable and render it.
  var rootNode = this.createTree(data);
	var map = new DivTreeMap(treeMapContainer, 
	                        rootNode, 
	                        { shader: new TreeNodeShader(rootNode) });
	                        
	// Attach events.
	map.onZoomClick = function() { 
	  map.zoom(); backButton.disabled = false; 
	};
	map.onMouseOver = function(node) { 
	  infoBox.innerHTML =  node.toString();
	};
	backButton.onclick = function() {
	  backButton.disabled = ( map.unzoom() === 0 ); 
	};
	
	map.onBoxClick = function() {
	  var name = map.getSelected().node.name;
    for (var i=0; i < data.getNumberOfRows(); i++) {
      if (data.getValue(i, 0) == name) {
        self.selectedRow = i;
        google.visualization.events.trigger(self, 'select', {});
        break;
      }
    }
	};
};

// Parses the GViz DataTable and returns a Tree suitable to be used with
// the treemap javascript library.
ns.TreeMap.prototype.createTree = function(data) {
  
  // Get a list of all non-leaf nodes
  var parentsMap = {};
  var parents = data.getDistinctValues(1);
  for (var i=0; i<parents.length; i++) {
    parentsMap[parents[i]] = {name: parents[i], childs: []};
  }
  
  // Populate each parent node with the list of direct childs
  for (var i=0; i < data.getNumberOfRows(); i++) {
    var name = data.getValue(i, 0);
    var parent = data.getValue(i, 1);
    var quantity = data.getValue(i, 2);
    parentsMap[parent].childs.push({name: name, quantity: quantity});
  }
  
  // Assemble the tree
  for (var parent in parentsMap) {
    var childs = parentsMap[parent].childs;
    for (var i = 0; i<childs.length; i++) {
      if (parentsMap[childs[i].name]) {
        childs[i] = parentsMap[childs[i].name];
      }
    }
  }

  // Transform the tree in a set of TreeNode, TreeParentNode objects
  // (the expected input structure for the treemap js library)
  var rootNode = this.populateTree(parentsMap["Root"]);
  return rootNode;  
};

// Recursively populates a TreeNode structure.
ns.TreeMap.prototype.populateTree = function(node) {
  if (!node.childs) {
    // leaf node
    return new TreeNode( node.name, node.quantity );
  } else {
    // tree node
    var treenodes = [];
    for (var i = 0; i < node.childs.length; i++) {
      treenodes.push(this.populateTree(node.childs[i]));
    }
    return new TreeParentNode(node.name, treenodes);
  }
}

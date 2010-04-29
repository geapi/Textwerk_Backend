/* protoype script to highlight words with a specific class for 
each different word if desired */
Element.addMethods({
  highlightNew: function(element, term, className) {
    function innerHighlight2(element, term, className) {
      className = className || highlight;
      term = (term || '').toUpperCase();

      var skip = 0;
      if ($(element).nodeType == 3) {
        var pos = element.data.toUpperCase().indexOf(term);
        if (pos >= 0) {
          var middlebit = element.splitText(pos),
              endbit = middlebit.splitText(term.length),
              middleclone = middlebit.cloneNode(true),
              spannode = document.createElement('span');

          spannode.className = className; // 'highlight';
          spannode.appendChild(middleclone);
          middlebit.parentNode.replaceChild(spannode, middlebit);
          skip = 1;
        }
      }
      else if (element.nodeType == 1 && element.childNodes && !/(script|style)/i.test(element.tagName)) {
        for (var i = 0; i < element.childNodes.length; ++i)
          i += innerHighlight2(element.childNodes[i], term, className);
      }
      return skip;
    }
    innerHighlight2(element, term, className);
    return element;
  },
  removeHighlight: function(element, term, className) {
    className = className || 'highlight';
    $(element).select("span."+className).each(function(e) {
      e.parentNode.replaceChild(e.firstChild, e);
    });
    return element;
  }
});
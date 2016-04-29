var dominator = {
  create: function(tagType, className) {
    if (!!tagType) {
      console.log('tagType = ok');
      try {
        var createdElement = document.createElement(tagType);
      } catch (e) {
        console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack);
      }
      // check for class
      if (!!className) {
        console.log('className = ok');
        createdElement.className = className;
      } else {
        console.log('className != ok');
      }
      // end class check
    } else {
      console.log('tagType != ok');
    }
    return createdElement;
  },

  get: function(elementName) {
    if (!!elementName) {
      console.log('elementName = ok');
      var returnElement = document.querySelector(elementName);
    } else {
      console.log('elementName != ok');
    }
    return returnElement;
  },

  add: function(parent, child) {
    if (!!parent) {
      console.log('parent = ok');
      if (!!child) {
        console.log('child = ok');
        try {
          parent.appendChild(child);
        } catch (e) {
          console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack);
        }
      } else {
        console.log('child != ok');
      }
    } else {
      console.log('parent != ok');
    }

  },

  text: function(element, content) {
    element.textContent = content;
  }
};

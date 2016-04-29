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
  },

  clearAll: function() {
    var childNodes = this.get(".task-form");
    var textFields = childNodes.getElementsByTagName("input");
    var textArea = childNodes.getElementsByTagName("textarea");
    if (textFields.length > 0) {
      for (var i = 0; i < textFields.length; i++) {
        console.log(textFields[i]);
        textFields[i].value = '';
      }
    }
    if (textArea.length > 0) {
      for (var i = 0; i < textArea.length; i++) {
        console.log(textArea[i]);
        textArea[i].value = '';
      }
    }
  },

  getInput: function() {

  }


};

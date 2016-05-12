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

  validate: function(form) {
    var validated = false;

    var formElement = this.get(form);
    var textFields = formElement.getElementsByTagName("input");
    var textArea = formElement.getElementsByTagName("textarea");

    if (textFields.length > 0) {
      for (var i = 0; i < textFields.length; i++) {
        if (!textFields[i].value) {
          // this.validationError();
          console.log(textFields[i] + " is empty!");
          textFields[i].value = 'Please insert some info here!';
          validated = false;
        } else validated = true;
      }
    }

    if (textArea.length > 0) {
      for (var i = 0; i < textArea.length; i++) {
        if (!textArea[i].value) {
          // this.validationError();
          console.log(textArea[i] + " is empty!");
          textArea[i].value = 'Please insert some info here!';
          validated = false;
        } else validated = true;
      }
    }

    return validated;
  },

  validationError: function() {
    var sp2 = this.get(".task-form");
    var sp1 = this.create("p");
    sp1.className += "warning";
    this.text(sp1, "There's an input error!");
    sp2.insertBefore(sp1, sp2.firstElementChild);
    $(sp1).slideDown(300).delay(2000).slideUp(300);
  },

  getValue: function(elementName) {
    // we should writer validation later
    return this.get(elementName).value;
  }


};

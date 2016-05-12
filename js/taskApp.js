function createTask(title, deadline, shortDescription) {
  var newTask = dominator.create("div");
  var taskTitle = dominator.create("h2")
  var taskDeadline = dominator.create("time")
  var taskDescription = dominator.create("p");

  // set description
  dominator.text(taskDeadline, "Deadline: " + deadline);
  dominator.text(taskTitle, title);
  dominator.text(taskDescription, "To-Do: " + shortDescription);

  // adding created element to the document
  dominator.add(newTask, taskTitle);
  dominator.add(newTask, taskDeadline);
  dominator.add(newTask, taskDescription);

  // get task list to add task at the end
  var taskList = dominator.get(".task-list");
  dominator.add(taskList, newTask);
}

function init() {
  var taskButton = dominator.get(".getTask");
  taskButton.onclick = function(evt) {
    // debugger;
    evt.preventDefault();
    if (dominator.validate(".task-form")) {
      var taskTitle = dominator.getValue('#taskName');
      var taskDeadline = dominator.getValue('#taskDeadline');
      var taskDescription = dominator.getValue('#taskDescription');

      createTask(taskTitle, taskDeadline, taskDescription);

      $(".new-task-overlay").fadeOut(300);
      // clear the input
      dominator.clearAll();
    }
  }

  $("#addTask").click(function() {
    $(".new-task-overlay").fadeIn(300);
  });

  $(".cancelTask").click(function(e) {
    e.preventDefault();
    $(".new-task-overlay").fadeOut(300);
    // clear the input
    dominator.clearAll();
  });
}

init();
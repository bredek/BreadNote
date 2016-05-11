function createTask(title, deadline, shortDescription) {
  // let's check the input
  console.log(!!(title));
  console.log(!!(deadline));
  console.log(!!(shortDescription));

  if (!!(title) && !!(deadline) && !!(shortDescription)) {
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
  } else {
    // error message
    var sp2 = dominator.get(".task-form");
    var sp1 = dominator.create("p");
    sp1.className += "warning";
    dominator.text(sp1, "There's an input error!");
    sp2.insertBefore(sp1, sp2.firstElementChild);
    $(sp1).slideDown(300).delay(2000).slideUp(300);
    // alert("OH SHIT! THERE'S SOMETHING WRONG WITH THE INPUT!");
  }
}

var taskButton = document.querySelector(".getTask");
taskButton.onclick = function(evt) {
  evt.preventDefault();
  var taskTitle = document.getElementById('taskName').value;
  console.log(taskTitle);
  var taskDeadline = document.getElementById('taskDeadline').value;
  console.log(taskDeadline);
  var taskDescription = document.getElementById('taskDescription').value;
  console.log(taskDescription);

  createTask(taskTitle, taskDeadline, taskDescription);
  // $(".new-task-overlay").hide();
  dominator.clearAll();
}

$("#addTask").click(function() {
  $(".new-task-overlay").fadeIn(300);
});

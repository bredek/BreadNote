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
    dominator.text(taskDeadline, deadline);
    dominator.text(taskTitle, title);
    dominator.text(taskDescription, shortDescription);

    // adding created element to the document
    dominator.add(newTask, taskTitle);
    dominator.add(newTask, taskDeadline);
    dominator.add(newTask, taskDescription);

    dominator.add(document.body, newTask);
  } else {
    alert("OH SHIT! THERE'S SOMETHING WRONG WITH THE INPUT!");
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
  dominator.clearAll();
}

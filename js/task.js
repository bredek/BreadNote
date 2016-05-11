function Task(tite, deadline, description) {
  this.tite = tite;
 	this.deadline = deadline;
 	this.description = description;
}

Task.prototype.toString = function(){
	return "Task info: " + this.tite + " " + this.deadline + " " + this.description;
}

var newTask = new Task('This is title', "Deadline", "Short description");
console.log(newTask);

let addbtn=document.querySelector(".addbtn")
let contentArea=document.querySelector(".contentArea")


let Todos = {};

function createTodos(task, desc, due, prio) {
  Todos.title = `${task}`;
  Todos.description = `${desc}`;
  Todos.duedate = `${due}`;
  Todos.priority = `${prio}`;
}


// function displayTodos() {
   


// }

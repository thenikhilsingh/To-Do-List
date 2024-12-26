let addbtn = document.querySelector(".addBtn");
let contentArea = document.querySelector(".contentArea");
let homepage = document.querySelector(".homepage");
let addbtnpage = document.querySelector(".addbtnpage");

let Todos = {};

function createTodos(task, desc, due, prio) {
  Todos.title = `${task}`;
  Todos.description = `${desc}`;
  Todos.duedate = `${due}`;
  Todos.priority = `${prio}`;
}

let addbtnflag = false;
addbtn.addEventListener("click", () => {
  if (addbtnflag == false) {
    addbtnflag = true;
    homepage.style.cssText = "display:none";
    addbtnpage.style.cssText = "display:block;";
  } else {
    addbtnflag = false;
    homepage.style.cssText = "display:block";
    addbtnpage.style.cssText = "display:none;";
  }
});


function displayTodos() {
    
}

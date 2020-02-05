const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  var li = document.createElement("li");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  var span = document.createElement("span");
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit() {
  event.preventDefault();
  var currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  var toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    // 보여줘야지~
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

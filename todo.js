const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  var newId = toDos.length + 1;
  var li = document.createElement("li");
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  var span = document.createElement("span");
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  var toDo = {
    text: text,
    id: newId
  };
  toDos.push(toDo);
  saveToDos();
}

function handleSubmit() {
  event.preventDefault();
  var currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  var loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    var parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

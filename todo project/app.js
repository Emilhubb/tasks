const search = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const addTodo = document.querySelector("#add-todo");
const addTodoButton = document.querySelector("#add-button");
const todoList = document.querySelector(".main-part");
let todos = [];

runEvent();

function runEvent() {
    addTodoButton.addEventListener("click", addToList);
    document.addEventListener("DOMContentLoaded", refreshPage);
    todoList.addEventListener("click", removeTodo);
    search.addEventListener("keyup", searching);
}
addTodo.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addToList(e);
    }
});
function removeTodo(e) {
    if (e.target.className === "fa-solid fa-xmark") {
        const silinen = e.target.parentElement.parentElement;
        silinen.remove();
    }
}
function searching(e) {
    const filter = e.target.value.toLowerCase().trim();
    const todolar = document.querySelectorAll(".list-items");
    if (todolar.length > 0) {
        todolar.forEach(function (todoElements) {
            if (todoElements.textContent.toLowerCase().trim().includes(filter)) {
                todoElements.setAttribute("style", "display : block");
            }
            else {
                todoElements.setAttribute("style", "display : none");


            }
        })
    } else {
        alert("Todo siyahısında element yoxdur!")
    }
}
function refreshPage() {
    checkCondition();
    todos.forEach(function (todo) {
        addToScreen(todo);
    });
}
function addToList(e) {
    const inputText = addTodo.value.trim();
    if (inputText == null || inputText == "") {
        alert("Todo əlavə edin!")
    }
    else {
        addToScreen(inputText);
        addToStorage(inputText);
    }
    e.preventDefault();

}
function addToScreen(newTodo) {
    const li = document.createElement("li");
    li.className = "list-items";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.id = "remove-todo";

    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
    addTodo.value = ""

}
function addToStorage(newTodo) {
    checkCondition();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function checkCondition() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}


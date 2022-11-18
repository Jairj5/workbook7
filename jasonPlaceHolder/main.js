let todoBtn = document.getElementById("todo-btn");
let todoInput = document.getElementById("todo-input")
let messageDiv =document.getElementById("message-div")

function onToDoBtnClicked() {

    const userId = todoInput.value;
    fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

window.onload = () => {
    const toDoBtn = document.getElementById("todo-btn")

    toDoBtn.onclick = onToDoBtnClicked;

}
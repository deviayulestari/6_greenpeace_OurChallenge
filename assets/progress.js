const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.list');

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",clickInList);

function addTodo(event)
{
    event.preventDefault();
    console.log("hell");
    if(todoInput.value == "")
    {
        return;
    }

    const todoDiv = document.createElement("div");
    
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    
    newTodo.innerText = todoInput.value;
    console.log(todoInput.value);
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function clickInList(e){
    const item = e.target;
    if(item.classList[0] === "trash"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }

    if(item.classList[0] === "btn"){
        item.parentElement.classList.toggle("completed");
    }
}
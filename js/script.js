//seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn= document.querySelector("#cancel-edit-btn");

//funções

const saveTodo = (Text) =>{

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = Text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);
    console.log(todo);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
}

//eventos
todoForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    console.log('envio form');

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
})

document.addEventListener("click", (e) =>{

    const targetElemnt = e.target

    if(targetElemnt.classList.contains("finish-todo")){
        console.log("finalizou")
    }
})

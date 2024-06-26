document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const todoItem = document.createElement('li');
        
        todoItem.textContent = todoText;
        todoItem.appendChild(createDeleteButton());
        todoItem.addEventListener('click', toggleComplete);

        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function toggleComplete(event) {
    const todoItem = event.target;
    todoItem.classList.toggle('completed');
}

function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTodo);
    return deleteBtn;
}

function deleteTodo(event) {
    event.stopPropagation();
    const todoItem = event.target.parentElement;
    todoItem.remove();
}
todoInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTodo();
    }
})

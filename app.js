// Define UI Variables  
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#tasks');

// Load Event Listeners
loadEventListener();

// Load All Event Listeners
function loadEventListener(){
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a task')
    }
    e.preventDefault();
}
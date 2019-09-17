// Define UI Variables  
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load Event Listeners
loadEventListener();

// Load All Event Listeners
function loadEventListener(){
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create list element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));  //Creates list item with text
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    e.preventDefault();
}
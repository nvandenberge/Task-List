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
    form.addEventListener('submit', addTask); //Add Task
    taskList.addEventListener('click', removeTask); // Remove Task
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
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
taskInput.value = '';
e.preventDefault();
}


// Remove list element
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you would like to remove this task?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(){
    while(taskList.firstChild)
    taskList.removeChild(taskList.firstChild);
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}
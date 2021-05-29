// /*

// Selecting Elements
const taskContainer = document.querySelector('.tasks-container');
const newTaskForm = document.querySelector('#adding-form');
const newTask = document.querySelector('[data-new-list-input]');
const addButton = document.querySelector('#ad');
const deletes = document.querySelector('#delete');
const taskTemplate = document.querySelector('#task-template');
const listCount = document.querySelector('#list-count');
const eliminate = document.querySelector('#eliminate');
const filterActive = document.getElementById('active_task');
const filterCompleted = document.getElementById('completed_task');

// Local Storage Keys
const LOCAL_STORAGE_KEY = 'tasks-key';
const LOCAL_STORAGE_SELECTED_LIST_ID = 'task.selectedListId';

let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID);

// Adding New Task
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTask.value;
    if (taskName == null || taskName == '') return;
    const list = createList(taskName);
    newTask.value = null;
    tasks.push(list);
    saveAndRender();
})

// Checking the tasks
taskContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedTask = tasks.find(task => task.id === e.target.id)
            selectedTask.complete = e.target.checked;
            renderTaskCount(selectedTask);
            save();
            // console.log(selectedTask.complete);
    }
})
console.log(tasks);

/** Delete tasks */
taskContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'button') {
    const selectedTask = tasks.find(task => task.id === e.target.id);
    //  selectedTask.complete != e.target.pressed;
         const task = taskContainer.querySelector('.task');
         task.remove();
     
     console.log(selectedTask.complete);
     save();
    }
    })

// Filter the Active 
function active() {
    const filterTask = tasks.filter(task => task.complete);
    filterTask === false;
    console.log(filterTask);

   }
filterActive.addEventListener('click', active);

// Filter the Completed
// function completed() {
//     const filterTask = tasks.filter(task => task.complete);
//     filterTask === true;
//     console.log(filterTask);
//     render();
// }
// filterCompleted.addEventListener('click', completed);

// Filet


// Object for the Local Storage   
function createList(name) {
    return {
        id: Date.now().toString(),
        name: name,
        complete: false
    };
}

// Create the tasks Container
function render() {
    clearElement(taskContainer);
    tasks.forEach(tasks => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector('input');
        checkbox.id = tasks.id;

        const listTask = taskElement.querySelector('.task');
        listTask.id = tasks.id;


        const equis = taskElement.querySelector('#eliminate');
        equis.id = tasks.id;
        equis.pressed = tasks.complete;


        checkbox.checked = tasks.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = tasks.id;
        label.append(tasks.name);
        taskContainer.appendChild(taskElement);

        

    })
};

// Create the counting of the tasks
function renderTaskCount(){
    const incompleteTasks = tasks.filter(task => !task.complete).length;
    const taskString = incompleteTasks === 1 ? "task" : "tasks";
    listCount.innerHTML = `${incompleteTasks} ${taskString} left`;

}

function saveAndRender() {
    render();
    save();
}

// Save to the Local Storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID, selectedListId);
}




function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();

import{render, renderTaskCount, taskContainer, saveAndRender} from './utilities.js';
import{tasks, createList, save} from './ls2.js';


// Selecting Elements
const newTaskForm = document.querySelector('#adding-form');
const newTask = document.querySelector('[data-new-list-input]');
const addButton = document.querySelector('#ad');

// Adding New Task Event Listeners
newTaskForm.addEventListener('submit', addingTasks);
addButton.addEventListener('click', addingTasks);

// Adding Tasks 
function addingTasks(e){
    e.preventDefault();
    const taskName = newTask.value;
    if (taskName == null || taskName == '') return;
    const list = createList(taskName);
    newTask.value = null;
    tasks.push(list);
    saveAndRender();

} 

// Checking the tasks
taskContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedTask = tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked;
        renderTaskCount(selectedTask);
        save();
    }
})
/** Delete tasks */
function deleteTask(taskId) {
    let index = tasks.map(task => task.id).indexOf(taskId);
    console.log(index);
    tasks.splice(index, 1)
    saveAndRender();
}

taskContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'button') {
        console.log(e.target.parentElement.id)

        deleteTask(e.target.parentElement.id)
    }

})
render();

import { save, tasks, active, completed} from './ls2.js';

// Save and render
export function saveAndRender() {
    render();
    save();
}

// Select the Task Container and Task Template.
export const taskContainer = document.querySelector('.tasks-container');
const taskTemplate = document.querySelector('#task-template');

// Search what button is active.
const buttons = document.getElementsByClassName("buttons");
let activeButtons = 'all'
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        activeButtons = this.id
        render();
    });
}

// Function select what task I need to Display. 
function filterTasks() {
    let tasksToRender = [];
    switch (activeButtons) {
        case 'all':
            tasksToRender = tasks;
            break;
        case 'active_task':
            tasksToRender = active();
            break;
        case 'completed_task':
            tasksToRender = completed();
            break;

    }
    return tasksToRender;
}

// Render the selected tasks
export function render() {
    clearElement(taskContainer);
    const renderTasks = filterTasks();
    renderTasks.forEach(tasks => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector('input');
        checkbox.id = tasks.id;
        checkbox.checked = tasks.complete;

        const listTask = taskElement.querySelector('.task');
        listTask.setAttribute('id', tasks.id)

        const label = taskElement.querySelector('label');
        label.htmlFor = tasks.id;
        label.append(tasks.name);
        taskContainer.appendChild(taskElement);
        renderTaskCount();
    })

};


// Create the counting of the tasks
export const listCount = document.querySelector('#list-count');
export function renderTaskCount() {
    const incompleteTasks = tasks.filter(task => !task.complete).length;
    const taskString = incompleteTasks === 1 ? "task" : "tasks";
    listCount.innerHTML = `${incompleteTasks} ${taskString} left`;
}

// Clear Element if it already exist. 
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

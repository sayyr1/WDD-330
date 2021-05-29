/**
 * Save to the Local Storage
 */

// Key for the LocalStorage
const LOCAL_STORAGE_KEY = 'tasks-key';
export let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

// Object for the Local Storage   
export function createList(name) {
    return {
        id: Date.now().toString(),
        name: name,
        complete: false
    };
}

// Save to the Local Storage
export function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}


// Filter the Active Tasks
export function active() {
    const filterTask = tasks.filter(task => task.complete == false);
    console.log(filterTask);
    return filterTask;

}

// Filter the Completed Tasks
export function completed() {
    const filterTask = tasks.filter(task => task.complete == true);
    return filterTask;
}


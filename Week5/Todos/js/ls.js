/*
read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
@return {array} The value as an array of objects /
function readFromLS(key) { }
*/
export let todos = [];
export function readFromLSkey(key) {
    key.preventDefault();

    let enter = document.getElementById('enter').value;
    // let completed = document.querySelector('checkbox').value;


    let todo = {
        id: Date.now(),
        task: enter,
        // completed: completed
    }

    todos.push(todo);
    document.getElementById('adding').reset();

    localStorage.setItem('ListofTasks', JSON.stringify(todos));

    console.table('added', {todos})
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#ad').addEventListener('click', readFromLSkey)
});


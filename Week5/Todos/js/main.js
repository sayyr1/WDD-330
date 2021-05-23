/** Do a querySelector lookup 
 * @param {string} selector The selector passsed to querySelector
 * @return {element} The matching element or null if not found
 * function qs(selector){}
 */
function onTouch(elementSelector, callback) {
    elementSelector = document.querySelector('.body');
    const div = document.createElement('div');
    div.innerHTML = '<input type="checkbox"> <p>Task</p><input type="button" class="delete" value="X">';
    elementSelector.appendChild(div);
    div.classList.add('task');




    const tasks = document.querySelectorAll('.task');
    tasks.addEventListener('click', () => {
        for(task of tasks){
            task.classList = "erase";
        }
        
    });

};
const add = document.getElementById('ad');
add.addEventListener('click', onTouch);







const incompList = document.getElementById("incomplete-items");
const compList = document.getElementById("complete-items");
/**
 * @typedef Item
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */
/**
 * @type {Item[]}
 */

/**
 * @param {Item[]} toDoList
 */
function addToDoItems(toDoList){
    let itemDesc;
    let newLiItem;
    for(item of toDoList){
        if(item.completed){
            itemDesc = item.title;
            newLiItem = document.createElement("li");
            newLiItem.innerHTML = itemDesc;
            compList.appendChild(newLiItem);
        }
        else{
            itemDesc = item.title;
            newLiItem = document.createElement("li");
            newLiItem.innerHTML = itemDesc;
            incompList.appendChild(newLiItem)
        }
    }
}
addToDoItems(todoItems);

compList.style.listStyleType = "none";
incompList.style.listStyleType = "none";
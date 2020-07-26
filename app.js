const addButton = document.querySelector('.addButton');
const delAllButton = document.querySelector('.delAllButton')
var input = document.querySelector('.input');
const mainContainer = document.querySelector('.main_container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let delButton = document.createElement('button');
        delButton.innerHTML = "DELETE";
        delButton.classList.add('delButton');

        mainContainer.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(delButton);

        editButton.addEventListener('click', () => this.edit(input));
        delButton.addEventListener('click', () => this.delete(itemBox));
    }
    edit(input) {
        input.disabled = !input.disabled;
    }
    delete(item) {
        mainContainer.removeChild(item);
    }
}

function test() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}
function test1(){
    mainContainer.innerHTML = "";
}
addButton.addEventListener('click', test);
delAllButton.addEventListener('click', test1);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        test();
    }
})

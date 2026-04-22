const addButton = document.querySelector("#add-btn");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const title = document.querySelector("#title");


title.addEventListener('click', function() {
    title.contentEditable = true;
    title.focus();
});

title.addEventListener('blur', function() {
    title.contentEditable = false;
});


addButton.addEventListener('click', function() {
    let newTask = input.value;
    let li = document.createElement('li');
    li.textContent = newTask;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
    li.remove();
    });

    li.appendChild(deleteButton);

    if(input.value !== '') {
        list.appendChild(li);
    }   

    input.value = '';
    
});








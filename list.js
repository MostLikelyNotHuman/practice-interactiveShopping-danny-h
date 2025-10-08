// Instructions
// Create a dynamic shopping list application that uses DOM manipulation and event
// handling to add, edit, and remove items from the list. You will practice:
// ● Selecting DOM elements using document.getElementById() and
// document.querySelector().
// ● Dynamically updating the DOM by adding, modifying, and removing
// elements.
// ● Caching DOM elements for efficient code.

// Tasks

// 2. Core Features:
    // ● Add Items:
    // ○ When the user enters text in the input field and clicks the "Add"
    // button, a new list item is added to the list.

//Cached: input field, add button, list

const input = document.getElementById("inputField");
const addButton = document.getElementById("addItemButton");
const list = document.getElementById("toDoList")

//edit button, delete button

const editButton = document.querySelectorAll("#editButton");
const deleteButton = document.getElementById("Delete");

addButton.addEventListener('click', () => {
    addNewListItem();
})



function addNewListItem() {
    let newListItemText = input.value;
    if (!newListItemText) {
        return;
    }
    let newListItem = document.createElement("li");
    input.value = '';
    newListItem.textContent = newListItemText;
    let addedButtons = addButtons(newListItem);    
    list.appendChild(addedButtons);
}

function addButtons(listItem) {
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");

    //deleteButton.innerHTML = '<button class = "Delete">Delete</button>';
    //editButton.innerHTML = '<button class = "Edit">Edit</button>';

    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', (event) => {
        console.log('clicked');
        listItem.remove();
    })

    editButton.innerText = 'Edit';
    editButton.addEventListener('click', (event) => {
        console.log('clicked');
        
        //hide buttons
        deleteButton.hidden = true;
        editButton.hidden = true;

        //store item text in variable
        let savedText = listItem.innerText;
        //reset item text
        listItem.innerHTML = '';
        //log variable, check
        console.log(savedText);

        //create new text input field
        let newInput = document.createElement('input');
        //assign text input field stored value
        newInput.value = savedText;
        listItem.appendChild(newInput);

        let saveButton = document.createElement("button");
        saveButton.innerText = 'Save';
        listItem.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            
            let editedItem = newInput.value;
            saveButton.hidden = true;

            listItem.innerText = editedItem;
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            editButton.hidden = false;
            deleteButton.hidden = false;

        })
    })
    
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    //this works and we dont ask questions
    return listItem;
}
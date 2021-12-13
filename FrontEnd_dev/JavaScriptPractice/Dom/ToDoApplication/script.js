let todoItemsContainer = document.getElementById('todoItemsContainer')

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn JavaScript"
    },
    {
        text: "Learn Python"
    }
]

function createTodoTask(todoList) {
    let todoElement = document.createElement('li')
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row")
    todoItemsContainer.appendChild(todoElement)
    
    let inputElement = document.createElement('input')
    inputElement.type = "checkbox"
    inputElement.id = "checkboxInput"
    inputElement.classList.add("checkbox-input")
    todoElement.appendChild(inputElement)
    
    let labelContainer = document.createElement('div')
    labelContainer.classList.add("label-container", "d-flex", "flex-row")
    todoElement.appendChild(labelContainer)
    
    let checkboxLabel = document.createElement('label')
    checkboxLabel.classList.add("checkbox-label")
    checkboxLabel.setAttribute("for", "checkboxInput")
    checkboxLabel.textContent = todoList.text
    labelContainer.appendChild(checkboxLabel)
    
    let deleteContainer = document.createElement('div')
    deleteContainer.classList.add("delete-icon-container")
    labelContainer.appendChild(deleteContainer)
    
    let deleteIcon = document.createElement('i')
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon")
    deleteContainer.appendChild(deleteIcon)
}

for(let todo of todoList){
    createTodoTask(todo)
}

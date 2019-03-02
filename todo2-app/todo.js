'use strict'

let todos = getSavedDate()

const filterTextToDo = {
    text: '',
    hideCompleted: false
}

render(todos, filterTextToDo)

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filterTextToDo.text = e.target.value
    render(todos, filterTextToDo)
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const addTodo = e.target.elements.newTodo.value.trim()
    todos.push({ id: uuidv4(), text: addTodo, completed: false })
    saveNewToDo(todos)
    render(todos, filterTextToDo)
    e.target.elements.newTodo.value = ' '
})

document.querySelector('#hide-completed-to-do').addEventListener('change', (e) => {
    filterTextToDo.hideCompleted = e.target.checked
    render(todos, filterTextToDo)
})
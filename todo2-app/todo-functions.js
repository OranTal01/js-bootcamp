'use strict'

// get saved date from local storage
const getSavedDate = () => {
    const todosGetDate = localStorage.getItem('todo')

    try {
        return todosGetDate ? JSON.parse(todosGetDate) : []
    } catch (error) {
        return []
    }
}

// save new todo to local storage

const saveNewToDo = (todos) => {
    localStorage.setItem('todo', JSON.stringify(todos))
}

// render to the dom
const render = (todos, filterTextToDo) => {

    const renderFilter = todos.filter((todo) => {
        if (filterTextToDo.hideCompleted) {
            return !todo.completed && todo.text.toLowerCase().includes(filterTextToDo.text.toLowerCase())
        } else {
            return todo.text.toLowerCase().includes(filterTextToDo.text.toLowerCase())
        }
    })

    const orderCompleteToDo = renderFilter.sort((a, b) => {
        if (!a.completed) {
            return -1
        } else if (!b.completed) {
            return 1
        } else {
            return 0
        }
    })

    const notCompleteToDo = renderFilter.filter((todo) => !todo.completed)

    document.querySelector('#todo').innerHTML = ''

    const notComplete = document.createElement('h2')
    notComplete.textContent = `you have todo: ${notCompleteToDo.length} todos left`
    document.querySelector('#todo').appendChild(notComplete)

    orderCompleteToDo.forEach((todo) => {
        document.querySelector('#todo').appendChild(generateToDoDom(todo))
    })
}

const removeElement = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const checkedTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id)
    if (findTodo) {
        findTodo.completed = !findTodo.completed
    }
}

// generateToDoDom 
const generateToDoDom = (todo) => {
    const todoContinuer = document.createElement('div')
    const text = document.createElement('span')
    const textCheckbox = document.createElement('input')
    textCheckbox.setAttribute('type', 'checkbox')
    textCheckbox.checked = todo.completed
    const removeTodo = document.createElement('button')

    removeTodo.textContent = 'REMOVE'

    if (todo.text.length > 0) {
        text.textContent = todo.text
    } else {
        text.textContent = 'please add new todo'
    }
    todoContinuer.appendChild(textCheckbox)
    todoContinuer.appendChild(text)
    todoContinuer.appendChild(removeTodo)
    removeTodo.addEventListener('click', (e) => {
        removeElement(todo.id)
        saveNewToDo(todos)
        render(todos, filterTextToDo)
    })

    textCheckbox.addEventListener('change', (e) => {
        checkedTodo(todo.id)
        saveNewToDo(todos)
        render(todos, filterTextToDo)
    })
    return todoContinuer
}
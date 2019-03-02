const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}]

const deleteToDo = function(todo, todoText) {
    const index = todo.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        return todo.splice(index, 1)
    } else {
        console.log('no todo to delete')
    }
}

deleteToDo(todos, '')
    // console.log(todos)

const getThingsToDo = function(todo) {
    return todo.filter(function(todo, index) {
        return todo.completed === false
    })
}

// console.log(getThingsToDo(todos))

const sortTodos = function(todo) {
    return todo.sort(function(a, b) {
        if (!a.completed) {
            return -1
        } else if (!b.completed) {
            return 1
        } else {
            return 0
        }
    })
}
console.log(sortTodos(todos))

document.querySelector('.submit').addEventListener('click', function(e) {
            console.log(e)
        }
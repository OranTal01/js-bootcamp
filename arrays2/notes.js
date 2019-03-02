const todo = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']

todo.splice(2, 1)
todo.push('todo6')
todo.shift()

console.log(`you have ${todo.length} todos`)
todo.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`)
})

// for (let count = 0; count < todo.length; count++) {
//     console.log(`${count + 1}. ${todo[count]}`)
// }
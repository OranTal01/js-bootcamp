'use strict'

let gameOne

window.addEventListener('keypress', (e) => {
    gameOne.makeGuess(e.key)
    gameOne.renderPuzzle()
    gameOne.statusMsg()
    gameOne.statusGame()
    gameOne.statusMsg()
})

getPuzzle('2').then((puzzle) => {
    gameOne = new HangmanGame(puzzle, puzzle.length)
    gameOne.renderPuzzle()
    gameOne.statusMsg()
}).catch((err) => {
    console.log(`Error: ${err}`)
})

document.querySelector('#rest').addEventListener('click', () => {
    getPuzzle('2').then((puzzle) => {
        gameOne = new HangmanGame(puzzle, puzzle.length)
        gameOne.renderPuzzle()
        gameOne.statusMsg()
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })
})

getCountry('IL').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getLocation().then((location) => {
    console.log(location.city)
    console.log(location.region)
    console.log(location.country)
}).catch((err) => {
    console.log(`Error: ${err}`)
})
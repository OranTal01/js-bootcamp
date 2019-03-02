'use strict'

class HangmanGame {
    constructor(word, remainingGuess) {
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.guessedLetters = []
        this.status = 'playing'
    }
    renderPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                return puzzle += letter
            } else {
                return puzzle += '*'
            }
        })
        return puzzle
    }
    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            const isUniq = !this.guessedLetters.includes(guess)
            const isBad = !this.word.includes(guess)
            if (isUniq) {
                this.guessedLetters.push(guess)
            }
            if (isUniq && isBad) {
                this.remainingGuess--
            }
        } else {
            return
        }
    }
    statusGame() {
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) && !this.renderPuzzle().includes('*')) {
                this.status = 'finished'
            } else if (!this.guessedLetters.includes(letter) && this.remainingGuess > 0) {
                this.status = 'playing'
            } else if (this.remainingGuess === 0) {
                this.status = 'failed'
            }
        })
    }
    statusMsg() {
        const remendingGuess = document.querySelector('#remending-guess')
        const getPuzzleRender = document.querySelector('#get-puzzle')
        if (this.status === 'playing') {
            getPuzzleRender.innerHTML = ''
            remendingGuess.textContent = `Remain Guess: ${this.remainingGuess}`
            gameOne.renderPuzzle().split('').forEach((element) => {
                const createPuzzleRender = document.createElement('span')
                createPuzzleRender.textContent = element
                createPuzzleRender.classList = "letter"
                if (createPuzzleRender.textContent !== ' ') {
                    createPuzzleRender.style.borderBottom = '1px solid #534f59'
                }
                getPuzzleRender.appendChild(createPuzzleRender)
            })
        } else if (this.status === 'failed') {
            remendingGuess.textContent = `You lose, you have ${this.remainingGuess} remaining guess left`
            getPuzzleRender.textContent = `the word is: "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            remendingGuess.textContent = `You won!`
            getPuzzleRender.textContent = `Grate work, you guessed the word: "${this.word.join('')}"`
        }
    }
}
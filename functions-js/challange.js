const makeGuess = function(guess) {
    const max = 5
    const min = 1
    let result = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(result)
    return guess === result
}

console.log(makeGuess(2))
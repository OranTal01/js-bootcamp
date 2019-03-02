// Challenge area
// A 25% tip on $40 would be $10

const tip = function(total, tipPercent = .2) {
    const totalTip = (total * tipPercent) / 100
    return totalTip
}

console.log(tip(50))
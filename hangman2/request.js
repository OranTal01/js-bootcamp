const getPuzzleOld = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((date) => {
        return date.puzzle
    })
}

const getPuzzle = async(wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const date = await response.json()
        return date.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countryDate = JSON.parse(e.target.responseText)
//             const country = countryDate.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to get country date')
//         }
//     })
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })

const getCountryOld = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get country date')
        }
    }).then((date) => {
        return date.find((country) => country.alpha2Code === countryCode)
    })
}

const getCountry = async(countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const date = await response.json()
        return date.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to get country date')
    }
}

const getLocationOld = () => {
    return fetch('https://ipinfo.io/json?token=3f3fbbeac5dedd').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unabe to get location')
        }
    })
}

const getLocation = async() => {
    const response = await fetch('https://ipinfo.io/json?token=3f3fbbeac5dedd')
    if (response.status === 200) {
        return date = await response.json()
    } else {
        throw new Error('unabe to get location')
    }
}
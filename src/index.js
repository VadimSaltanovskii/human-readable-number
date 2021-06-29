module.exports = function toReadable(number) {
    let units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    let secondTen = {
        10: 'ten',
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    }
    let dozens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }

    if (number < 10) {
        return units[number]
    }
    if (number < 20) {
        return secondTen[number]
    }

    let array = number.toString().split('')

    if (array.length === 2) {
        let first = Number(array[0])
        let growFirst = first * 10
        let second = Number(array[1])

        return dozens[number] || `${dozens[growFirst]} ${units[second]}`
    }
    if (array.length === 3) {
        if (number % 100 === 0) {
            let first = Number(array[0])
            return `${units[first]} hundred`
        }
        if (number % 100 === 10) {
            return `${units[Math.floor(number / 100)]} hundred ten`
        }
        if (number % 100 < 10) {
            return `${units[Math.floor(number / 100)]} hundred ${units[number % 100]}`
        }
        if (number % 100 < 20) {
            return `${units[Math.floor(number / 100)]} hundred ${secondTen[number % 100]}`
        }


        if (number % 10 === 0) {
            let first = Number(array[0])
            let second = Number(array[1])
            let growSecond = second * 10
            return `${units[first]} hundred ${dozens[growSecond]}`
        }

       
        else {
            let first = Number(array[0])
            let second = Number(array[1])
            let growSecond = second * 10
            let third = Number(array[2])

            return `${units[first]} hundred ${dozens[growSecond]} ${units[third]}`
        }
    }
}

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]


const randomNum = (min, max) => {
    min = Math.ceil(MIN)
    max = Math.floor(MAX)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const addNewRandomNumToArr = (arr, min, max) => {
    let newRandomNum
    const updatedArr = [...arr]

    do {
        newRandomNum = randomNum(min, max)
    } while (updatedArr.includes(newRandomNum))

    updatedArr.push (newRandomNum)
    return  updatedArr

}
const updatedArr  = addNewRandomNumToArr(myNumbers, MIN, MAX)

console.log (updatedArr)
console.log (myNumbers)
// let arrOfNum = [ 1, 3, 7, 15, 8]
//
// const sumOfNumbers = arrOfNum.reduce((acc, number) => acc + number, 0)
//
// let findAverage = (a) => {
//     const averageNum = a / arrOfNum.length
//     return console.log (averageNum)
// }
//
// console.log (findAverage(sumOfNumbers))


let arrOfNum = [1, 3, 7, 15, 8]
const meanNum = () => {
    let sum = 0
    for (let i = 0; i < arrOfNum.length; i++) {
        sum += arrOfNum[i]
    }
    return sum / arrOfNum.length
}

console.log (meanNum())
console.log (arrOfNum[4])


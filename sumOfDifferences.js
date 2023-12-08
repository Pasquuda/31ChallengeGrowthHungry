const myArr = [-14,-21,-3,12,19,-17,20,-11,13,1,-15,-15,-1,-3,-13,-19,-24,5,-13,-7,-13,-3]

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0
    }
    arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}
console.log (sumOfDifferences(myArr))
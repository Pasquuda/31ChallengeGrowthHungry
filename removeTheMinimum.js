const removeSmallest = (arr) => {
    if (arr.length === 0) {
        return []
    }
    const minIndex = arr.indexOf(Math.min(...arr))
    return arr.slice(0, minIndex).concat(arr.slice(minIndex + 1))
}

const originalArray = [4, 2, 6, 1, 5]
console.log(removeSmallest(originalArray))
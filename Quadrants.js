const quadrants = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'One of the axes is not a number'
    }
    if (x > 0 && y > 0) {
        return '1'
    }
    if (x < 0 && y > 0) {
        return '2'
    }
    if (x < 0 && y < 0) {
        return '3'
    }
    if (x > 0 && y < 0) {
        return '4'
    }
    else {
        return '0'
    }
}

console.log(quadrants(-5, -2))

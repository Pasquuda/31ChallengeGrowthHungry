const calculateAge = (birthYear, targetYear) => {
    const age = targetYear - birthYear

    if (age < 0) {
        return `You will be born in ${-age} year${-age === 1 ? '' : 's'}.`
    }
    if (age > 0) {
        return `You are ${age} year${age === 1 ? '' : 's'} old.`
    }
    if (age === 0) {
        return 'You were born this very year!'
    }
}

console.log(calculateAge(2016, 2016))
console.log(calculateAge(1990, 2016))
console.log(calculateAge(2003, 1990))
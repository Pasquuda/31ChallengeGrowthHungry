const countVowels = (str) => {
    str = str.toLowerCase()
    const vowels = 'aeiyou'
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            count++
        }
    }
    return count
}

const inputStr = 'My name is Egor'
const result = countVowels(inputStr)
console.log (result)
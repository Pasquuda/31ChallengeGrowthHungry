
const str = 'Today is the best day of my life'
// option 1
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
const result = countVowels(str)
console.log (result)

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']


// Option 2
//
// str.split('').forEach((char) => {
//     if (vowels.includes(char)) {
//         vowelsCount += 1
//     }
// })

// Option 3
for (const char of str) {
    if (vowels.includes(char)) {
        vowelsCount += 1
    }
}

console.log(vowelsCount)
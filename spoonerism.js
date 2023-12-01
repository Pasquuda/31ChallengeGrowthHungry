function spoonerize(words) {
    const wordList = words.split(" ")
    const [firstWord, secondWord] = wordList
    const spoonerism = secondWord[0] + firstWord.slice(1) + " " + firstWord[0] + secondWord.slice(1)
    return spoonerism
}

const inputString = "nit picking"
const result = spoonerize(inputString)
console.log(result)
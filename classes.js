class Str {
    myNewMethod(string) {
        return string.toUpperCase()
    }
}
const methodUse = new Str()
console.log(methodUse.myNewMethod('egor'))

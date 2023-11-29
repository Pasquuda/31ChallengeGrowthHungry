const getPassword = (length) => {
    const charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()_-+=<>?"
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor (Math.random() * charset.length)
        password += charset[randomIndex]
    }
    return password
}

let passwordLength = 15
const generatedPassword = getPassword(passwordLength)
console.log(generatedPassword)
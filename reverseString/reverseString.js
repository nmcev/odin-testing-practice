function reverseString(string) {
    let result = "";
    if (typeof string === 'string') {
        for (let i = string.length - 1; i >= 0; i--) {
            result += string.charAt(i)
        }
    }
    else {
        return string
    }
    return result
}
module.exports = reverseString
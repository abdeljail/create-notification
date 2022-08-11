
const string = (value) => {

    if (value === "")
        return false

    if (value === null)
        return false

    if (value === undefined)
        return false

    if (typeof value !== "string")
        return false

    value = value.trim()
    
    const regexp = RegExp('(^[A-Za-z]{3,16}))', 'g');

    if (regexp.exec(value) === null)
        return false

    return true
}





export {
    string,
}
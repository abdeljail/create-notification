
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


    if (value.includes("<") || value.includes("</"))
        return false

    return true
}





export {
    string,
}
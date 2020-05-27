

function number(num) {
    if (num === null || num === undefined) {
        num = "Unknown"
    }

    return num.toLocaleString()
}

export default { number };
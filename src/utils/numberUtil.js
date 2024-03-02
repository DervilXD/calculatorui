export function isNotNumberOrPeriod(value) {
    const regex = /[^0-9.]/
    return regex.test(value)
}
function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
// exports.sum = sum;
// this.exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

/* Exporting the functions as an object. */
module.exports = {
    sum,
    substract,
    multiply,
    divideNumbers: divide,
};
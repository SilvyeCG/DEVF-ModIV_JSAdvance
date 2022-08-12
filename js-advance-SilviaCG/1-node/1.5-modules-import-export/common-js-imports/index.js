const operations = require('./functions');

/**
 * Main() is a function that takes two numbers, numero1 and numero2, and passes them to four other
 * functions, sum, substract, multiply, and divideNumbers, which are all part of the operations object.
 * 
 * 
 * The results of these functions are stored in four variables, resultSum, resultSubs, resultMult, and
 * resultDiv, and then printed to the console.
 */
function main() {
    let numero1 = 10;
    let numero2 = 40;

    const resultSum = operations.sum(numero1, numero2);
    const resultSubs = operations.substract(numero1, numero2);
    const resultMult = operations.multiply(numero1, numero2);
    const resultDiv = operations.divideNumbers(numero1, numero2);
    
    console.log('suma: ', resultSum);
    console.log('resta: ', resultSubs);
    console.log('multiplicacion: ', resultMult);
    console.log('division: ', resultDiv);
}

main();
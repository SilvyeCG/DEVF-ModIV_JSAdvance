console.log('BLOQUE 5');

/**
 * BLOQUE 5: async await (ES8-2017)
 */


/**
 * This function returns a promise that resolves after a random amount of time with a random status
 * code of 200 or 500.
 * @returns A promise object.
 */
const validatePaymentPromise = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. validate CC and show loader');
            const statusArray = [200, 500];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];

            if (randomStatus === 200) {
                resolve('todo gucci');
            } else if (randomStatus === 500) {
                reject('TC declined');
            }

        }, 0);
    });
}

/**
 * The main function is executed, and when the validatePaymentPromise function is executed, the main
 * function is paused until the validatePaymentPromise function is resolved or rejected.
 */
async function main() {
    console.log('1. presionar el boton comprar');

    try {
        
        const response = await validatePaymentPromise();
        console.log('3 message "thanks for your purchase"', response);
        console.log('4 entregamos n fecha');
        
    } catch (error) {
        console.log('error', error)
    }

    console.log('FINAL');
}

main();
console.log('BLOQUE 4');

/**
 * BLOQUE 4: promises (pending, reject, resolve)
 */


/**
 * This function returns a promise that resolves after 1 second with a random status of 200 or 500
 * @returns A promise object.
 */
 const validatePaymentPromise = ()=>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('2. validate CC and show loader');
            const statusArray =[200,500];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];

            if(randomStatus === 200){
                resolve('todo gucci');
            }else if(randomStatus === 500){
                reject('TC declined');
            }
            
        }, 1000);
    });    
}

console.log('1. presionar el boton comprar');
validatePaymentPromise()
    .then(response =>{
        console.log('3 message "thanks for your purchase"', response);
        //more sentences happen
    }).then(() => console.log('4 entregamos n fecha'))
    .catch(error => console.log('error', error))
    .finally(()=> console.log('FINAL'))

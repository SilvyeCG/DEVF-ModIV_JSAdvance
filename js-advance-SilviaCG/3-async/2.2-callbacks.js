/**
 * BLOQUE 3: SOLUCION 1 uso de callbacks
 * un callback es una funcion que se pasa como parametro a otra, con
 * el fin de ejecutar en el momento que la necesitamos.
 * NOTA: No es una buena practica por el anidamiento que produce(callback hell)
 */

const showSuccessMessage = () => {
    console.log('3 message "thanks for your purchase"');
}

const validatePayment = (showSuccessMessage)=>{
    setTimeout(() =>{
        console.log('2. validate CC and show loader');
        showSuccessMessage();
    }, 3000);
}


console.log('1 press button buy');
validatePayment(showSuccessMessage);
 
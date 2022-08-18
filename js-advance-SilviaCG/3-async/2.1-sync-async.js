/**
 * codigo sincrono: una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante
 * */

console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');

 /**
  * BLOQUE 2: PROBLEMA TIPICO DE ASYNC
  */
 const validatePayment = ()=>{
    setTimeout(() =>{
        console.log('2. validate CC and show loader');
    }, 3000)
 };

 console.log('1 press button buy');
 validatePayment();
 console.log('3 message "thanks for your purchase"');
//CALCULADORE DE PROPINAS
let cuenta = 866
let porcentajePropina = 0.10
let propina = cuenta * porcentajePropina
let totalAPagar = cuenta + propina 
let cantComensales = 5
let pagoPorComensal = totalAPagar / cantComensales

console.log(`La cantidad de propina es: $${propina.toFixed(2)}, el total a pagar de la cuenta es de: $${totalAPagar}, la cantidad a pagar por comensal es de: $${pagoPorComensal}`);
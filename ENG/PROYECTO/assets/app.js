
document.getElementById("demo").innerHTML = "My First nigguh";

// const nombre = 'Marcos Soliz'
// const edad = 25
// const programador = true
 const separacionTexto = '**********************************'

// console.log(typeof(nombre))
// console.log(typeof(edad))
// console.log(typeof(programador))

//Calcula el área y el perimetro de un rectangulo con variables
// const area = 10
// const altura = 5

// const perimetro = area * altura

// console.log(perimetro)

//Dado un precio, calcula el precio con 15% de descuento y muestra ambos
// const precio = 236
// const descuento = 0.15

// const cantDescuento = precio * descuento
// const precioFinal = precio - cantDescuento
// console.log(separacionTexto)
// console.log(cantDescuento)
// console.log(precioFinal)

//Determina si un numero es par (usa %) y muestra un mensaje adecuado
const num = 40
if(num % 2 == 0){
    console.log('El numero es par')

} else{
    console.log('el numero es impar')
}


//Simula los datos de un producto de una tienda: nombre, precio original, porcentaje de descuento, disponibe en stock (boolean), categoría. Calcula el precio final y muestra un "recibo" formateado con template literals.

const nombreProducto = 'Bocina JBL'
const precioOriginal = 3000
const porcentajeDescuento = 0.30
const precioFinal =  precioOriginal - (precioOriginal * porcentajeDescuento) 
const disponible = true
const categoria = 'audio'


const recibo = console.log(`El producto: ${nombreProducto} tiene un descuento de 30%, reduciendo su precio a: ${precioFinal} el producto se encuentra disponible: ${disponible} y pertenece a la categoria: ${categoria}`);

const nombre = 'Marcos Ernesto Soliz Anaya'
const profesion = 'Soporte Técnico de Software'
let añosExperiencia = 0.01 //1 mes
let tecnologiasConocidas = ['JavaScript', 'HTML', 'Css', 'JQuery', 'Python'] //array

console.log(0.1+0.2);

let variableCool = 

console.log(Boolean(""));
console.log(Boolean("0"));

//1.- Convierte temperatura de Celcius a Farenheit: F = C x 9/5 + 32

let celcius = 40
let celciusAFarenheit = celcius * (9/5) + 32
console.log(celciusAFarenheit);

//2.- IMC
let altura = 1.76
let peso = 86
let formulaIMC =  peso / (altura * altura) 
console.log(formulaIMC);

//3. Calcula el precio final con descuento
let precio1 = 560
let iva = 0.16
let formulaIva = 560 + (560 * 0.16)
console.log(formulaIva);

//4. Determina si un numero es múltiplo de 3 y de 5 simultaneamente
let numero1 = 105
if(numero1 % 3 === 0 & numero1 % 5 === 0){
    console.log(`El numero ${numero1} SI es multiplo de 3 y de 5`);
}
else{
    console.log(`el numero ${numero1} NO es multiplo de 3 y de 5`);
}

//5. Calcula el tiempo en segundos dado horas, minutos y segundos por separado
let segundosAHoras = 3600 //1 hora equivale a 3600 segundos
let segundosAMinutos = 60 //1 minuto equivale a 60 segundos
let horas =5.7
let minutos = 12
let segundos = 45

let segundosAHorasFormula = horas * segundosAHoras
let segundosAMinutosFormula = minutos * segundosAMinutos
let segundosASegundos = segundos
console.log(`${horas} horas a segundos son: ${segundosAHorasFormula} segundos y ${minutos} minutos a segundos son: ${segundosAMinutosFormula} segundos y ${segundos} segundos son ${segundosASegundos} segundos`);



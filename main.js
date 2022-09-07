addEventListener("DOMContentLoaded", ()=>{
// 7. Escribir un programa que calcule el volumen de una esfera:
//  Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3
let radio=Number(prompt("Ingrese el radio; ", 3));
let div=(4/3);
let vol=(div * Math.PI * Math.pow(radio, 3));
console.log(`El volumen de la esfera es ${vol}`);
})
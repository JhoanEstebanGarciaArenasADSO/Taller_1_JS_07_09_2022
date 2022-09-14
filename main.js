addEventListener("DOMContentLoaded", ()=>{
// 9. Escribir un programa que calcule el área y el volumen de un cilindro:
 //A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
 //V = (PI * r2) * h

let radio = Number(prompt("Ingrese el radio del cilindro "));
let h = Number(prompt("Ingrese la altura del cilindro "));
let area=(2*(Math.PI * Math.pow(radio, 2)) + (2 * Math.PI * radio) * h);
let volu=(Math.PI * Math.pow(radio, 2)) * h;
console.log(`El area de un cilindro es: ${area}`);
console.log(`El volumen de un cilindro es: ${volu}`);

})
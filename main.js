addEventListener("DOMContentLoaded", ()=>{
// 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
// el resultado en metros/segundo. Velocidad = espacio/tiempo.
let esp=Number(prompt("Ingrese la distacia que recorrio el proyectil: "));
let tie=Number(prompt("Ingrese el tiempo del proyectil: "));
let vel=esp/tie;
console.log(`La velocidad del proyectil es: ${vel}`);

})
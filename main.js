addEventListener("DOMContentLoaded", ()=>{
// 8. Escribir un programa que evalúe la siguiente expresión:
//(a+7*c)/(b+2-a)+2*b 
let a = Number(prompt("Ingrese A", 7));
let b = Number(prompt("Ingrese B", 7));
let c = Number(prompt("Ingrese C", 7));
let formu=(a+7*c)/(b+2-a)+2*b
console.log(`El resultado de (a+7*c)/(b+2-a)+2*b, es: ${formu}`)

})
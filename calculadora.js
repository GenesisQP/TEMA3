
let num1 = 10; 
let num2 = 5; 
let operacion = "suma"; 


function realizarOperacion(num1, num2, operacion) {
    let resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        } else {
            resultado = num1 / num2;
        }
    } else {
        return "Error: Operación no válida.";
    }

    return resultado;
}


let continuar = true;

while (continuar) {
    
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    
    let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division):");

    
    let resultado = realizarOperacion(num1, num2, operacion);
    
    
    alert("Resultado: " + resultado);

   
    let respuesta = prompt("¿Deseas realizar otra operación? (si/no)");

    if (respuesta.toLowerCase() !== "si") {
        continuar = false; 
    }
}

alert("¡Gracias por usar la calculadora!");

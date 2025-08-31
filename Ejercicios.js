// ======================================
// 1) Mayor de dos números
// ======================================
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    alert("El mayor es: " + num1);
} else if (num2 > num1) {
    alert("El mayor es: " + num2);
} else {
    alert("Ambos números son iguales");
}

// ======================================
// 2) Costo de helados
// ======================================
let cantidad = parseInt(prompt("Ingrese la cantidad de helados que desea:"));
let total = cantidad * 5;
alert("El costo total es: $" + total);

// ======================================
// 3) Año de nacimiento
// ======================================
let edad = parseInt(prompt("Ingrese su edad:"));
let anioNacimiento = 2024 - edad;
alert("Su año de nacimiento es: " + anioNacimiento);

// ======================================
// 4) Promedio y aprobación
// ======================================
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 4) {
    alert("Aprobado. Promedio: " + promedio.toFixed(2));
} else {
    alert("Desaprobado. Promedio: " + promedio.toFixed(2));
}

// ======================================
// 5) Edad y saludo
// ======================================
let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let edadActual = 2024 - nacimiento;

if (edadActual >= 18) {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    alert("Hola " + nombre + " " + apellido + ", tu edad actual es: " + edadActual);
} else {
    alert("Eres menor de edad. Tienes " + edadActual + " años.");
}

// ======================================
// 6) Precio con IVA
// ======================================
let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let iva = precio * 0.21;
let precioFinal = precio + iva;
alert("El precio final con IVA es: $" + precioFinal.toFixed(2));

// ======================================
// 7) Conteo hasta número positivo
// ======================================
let num = parseInt(prompt("Ingrese un número positivo:"));

if (num > 0) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
} else {
    alert("El número ingresado no es positivo");
}

// ======================================
// 8) Conteo hacia atrás mostrando pares
// ======================================
let numPar = parseInt(prompt("Ingrese un número:"));

for (let i = numPar; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ======================================
// 9) Cuatro operaciones básicas
// ======================================
let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));

alert("Suma: " + (a + b));
alert("Resta: " + (a - b));
alert("Multiplicación: " + (a * b));

if (b !== 0) {
    alert("División: " + (a / b));
} else {
    alert("No se puede dividir por cero");
}

// ======================================
// 10) Números entre dos valores
// ======================================
let numA = parseInt(prompt("Ingrese el primer número:"));
let numB = parseInt(prompt("Ingrese el segundo número:"));

if (numA < numB) {
    for (let i = numA + 1; i < numB; i++) {
        console.log(i);
    }
} else if (numB < numA) {
    for (let i = numB + 1; i < numA; i++) {
        console.log(i);
    }
} else {
    alert("Los números son iguales, no hay valores intermedios");
}

// ======================================
// 11) Mes y estación
// ======================================
let mes = prompt("Ingrese el mes (en minúsculas):");

if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    alert("Verano");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    alert("Otoño");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    alert("Invierno");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    alert("Primavera");
} else {
    alert("Mes no válido");
}

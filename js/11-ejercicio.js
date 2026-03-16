let nombre1 = prompt("Ingrese el primer nombre");
while (!isNaN(nombre1)) {
  nombre1 = prompt("Error. Ingrese un nombre válido (no números)");
}
let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1));

let nombre2 = prompt("Ingrese el segundo nombre ");
while (!isNaN(nombre2)) {
  nombre2 = prompt("Error. Ingrese un nombre válido (no números)");
}
let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2));

let nombre3 = prompt("Ingrese el tercer nombre ");
while (!isNaN(nombre3)) {
  nombre3 = prompt("Error. Ingrese un nombre válido (no números)");
}
let edad3 = parseInt(prompt("Ingrese la edad de " + nombre3));

let mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayor;
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

document.writeln("La persona con mayor edad es: " + nombreMayor);

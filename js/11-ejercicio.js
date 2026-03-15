let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese la edad de " +  nombre1));
let nombre2 = prompt("Ingrese el segundo nombre ");
let edad2 = parseInt(prompt("Ingrese la edad de " +   nombre2));
let nombre3 = prompt("Ingrese el tercer nombre ");
let edad3 = parseInt(prompt("Ingrese la edad de " +   nombre3));

let mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayor;
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

alert("La persona mayor es: " + nombreMayor)

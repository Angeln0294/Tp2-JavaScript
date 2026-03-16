// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.
const entrada = prompt("Ingrese su edad: ");
const edad = parseInt(entrada);
const pantalla = document.getElementById("pantalla");

if (isNaN(edad)) {
  pantalla.innerHTML = "<p>La edad ingresada no es un número válido.</p>";
} else if (edad >= 18) {
  pantalla.innerHTML = "<p>Ya puedes conducir.<p>";
} else {
  pantalla.innerHTML = "<p>Aún no puedes conducir.</p>";
}

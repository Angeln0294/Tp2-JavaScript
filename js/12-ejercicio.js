// Genera un número entero aleatorio entre 1 y 99 (ambos incluidos)
const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
document.getElementById("pantalla").innerHTML = "<h1> Tu numero es " +numeroAleatorio + "</h1>";

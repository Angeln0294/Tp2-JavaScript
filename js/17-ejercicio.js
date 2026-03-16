let texto = prompt("Introduce un texto:").toLowerCase();
let posicion = -1;
const pantalla = document.getElementById("pantalla");

for (let i = 0; i < texto.length; i++) {
  if (
    texto[i] === "a" ||
    texto[i] === "e" ||
    texto[i] === "i" ||
    texto[i] === "o" ||
    texto[i] === "u"
  ) {
    posicion = i; 
    break;
  }
}

if (posicion !== -1) {
    
    pantalla.innerHTML = `La primera vocal está en la posición: ${posicion}`; 
} else {
    pantalla.innerHTML = "No se encontraron vocales";
}

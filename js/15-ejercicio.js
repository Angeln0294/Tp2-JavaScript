let texto = prompt("Escribe tu texto para contar las vocales que contiene").toLowerCase();
let contador = 0;
const pantalla = document.getElementById("pantalla");

if (texto && isNaN(texto)) {
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u" ||
      letra === "á" ||
      letra === "é" ||
      letra === "i'"||
      letra === "ó" ||
      letra === "ú"
    ) {
      contador++;
    }
  }
  pantalla.innerHTML = `el texto contiene ${contador} vocales.`;
} else {
  pantalla.innerHTML = "No ingresaste un texto valido";
}

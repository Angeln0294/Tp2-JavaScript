let texto = prompt("Ingresa aqui un texto")
let textoAlreves = ""
const pantalla = document.getElementById("pantalla");

for(let i = texto.length - 1; i >= 0; i--){
    textoAlreves += texto [i]
}
pantalla.innerHTML = `Tu texto al reves se lee de esta manera <br> ${textoAlreves}`
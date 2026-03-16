let texto = prompt("Escribe un texto")
const pantalla = document.getElementById("pantalla");

if(texto && isNaN(texto)){
    let resultado = texto.split("").join("-")
    pantalla.innerHTML = `<p>Resultado</p>${resultado}`
    
}else{
    pantalla.innerHTML = "no ingraste texto"
}
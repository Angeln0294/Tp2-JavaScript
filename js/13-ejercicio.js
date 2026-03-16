const texto = prompt("Escribi tu texto aqui")

if(texto && isNaN(texto)){
    const textoMayuscula = texto.toUpperCase();
    document.body.innerHTML = `<p>Tu texto en mayuscula</p>${textoMayuscula}`
    isNaN
}else{
    document.body.innerHTML = "<h2>No ingresaste ningun texto.</h2>"
}
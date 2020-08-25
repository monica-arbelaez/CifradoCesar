function rot13(str) {
  // split divide el string en una matriz
  return (
    str
      .split("")
        // map Itera sobre cada carácter de la matriz
        .map.call(str, function(char) {
        //Convierte el caracter en un caracter de código
        var x = char.charCodeAt(0);
       // Valida si el caracter está entre A y Z
        if (x < 65 || x > 90) {
          // Devolver carácter  convertido
          return String.fromCharCode(x); 
        }
        //si el código del carácter es menor que 78, avance 13 lugares
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        //De lo contrario,se mueva el carácter 13 lugares hacia atrás 
        return String.fromCharCode(x - 13);
      })
      // une la matriz en una cadena 
      .join("")
  ); 
}


let btn_cifrado = document.getElementById("btn_cifrado");
btn_cifrado.addEventListener("click", () => {
  document.getElementById("respuesta").innerHTML = `<p>${rot13(
    document.getElementById("textCesar").value)}</p>`;
});


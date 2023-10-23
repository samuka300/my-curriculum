function contarVogais() {
    var inputString = document.getElementById("inputString").value;
    var vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙãẽĩõũÃẼĨÕŨ";
    var count = 0;

    for (var i = 0; i < inputString.length; i++) {
        if (vogais.includes(inputString[i])) {
            count++;
        }
    }

    document.getElementById("resultado").innerHTML = "Número de vogais na string: " + count;
}
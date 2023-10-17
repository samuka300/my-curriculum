function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var resultado = "";

    if (!isNaN(imc)) {
        resultado = `${nome}, Seu IMC é: ${imc.toFixed(2)}`;
    } else {
        resultado = "Por favor, preencha peso e altura válidos.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
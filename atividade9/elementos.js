function dividirNome(){
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var partesDoNome = nomeCompleto.split(" ");
    document.getElementById("nome").value = partesDoNome[0] || "";
    document.getElementById("sobrenome").value = partesDoNome.slice(1).join(" ") || "";
}
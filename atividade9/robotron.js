// Guardado os Ids das Imgs

var imgRobotron = [
    "robotron-inicial",
    "robotron-amarelo",
    "robotron-azul",
    "robotron-branco",
    "robotron-preto",
    "robotron-rosa",
    "robotron-vermelho"
];

// Guardando os Indices das Imagens 
var indice = 0;

function avancar(){
    esconderImagem(indice);
    indice++;
        if(indice >= imgRobotron.length){
            indice = 0;
    }
    mostrarImagem(indice);
}

function voltar(){
    esconderImagem(indice);
    indice--;
    if(indice <= 0){
        indice = imgRobotron.length - 1;
    }
    mostrarImagem(indice);
}

function mostrarImagem(indiceAtual){
    var robotron = document.getElementById(imgRobotron[indiceAtual]);

    robotron.style.display = "block";
}

function esconderImagem(indiceAtual){
    var robotron = document.getElementById(imgRobotron[indiceAtual]);

    robotron.style.display = "none";
}
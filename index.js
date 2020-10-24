'use strict'

function setImaxe(numImaxe){
    imaxes[numImaxe].childNodes[1].innerHTML = novidades[x * 3 + numImaxe].texto;
    imaxes[numImaxe].childNodes[3].src = novidades[x * 3 + numImaxe].imaxe;
    imaxes[numImaxe].childNodes[3].alt = novidades[x * 3 + numImaxe].alt;
}

function changeImaxe() {
    x = (x === 1) ? 0 : 1;
    setImaxe(0);
    setImaxe(1);
    setImaxe(2);
}

function startTimer() {
    setInterval(changeImaxe, 2500);
}

const imaxes = document.querySelectorAll('div.img-container');
let novidades = [], x = 0;
novidades[0] = {
    imaxe : "/img/news/plata.jpg",
    texto : "Prata",
    alt : "prata"
};
novidades[1] = {
    imaxe : "/img/news/roca.jpg",
    texto : "Coio",
    alt : "coio"
};
novidades[2] = {
    imaxe : "/img/news/recocer.jpg",
    texto : "Recocer",
    alt : "recocer"
};
novidades[3] = {
    imaxe : "/img/news/oro.jpg",
    texto : "Ouro",
    alt : "ouro"
};
novidades[4] = {
    imaxe : "/img/news/collar.jpg",
    texto : "Colar",
    alt : "colar"
};
novidades[5] = {
    imaxe : "/img/news/pulir.jpg",
    texto : "Pulir",
    alt : "pulir"
};

function showSubmenu() {
    document.getElementById("subMenu").classList.toggle("hide");
}

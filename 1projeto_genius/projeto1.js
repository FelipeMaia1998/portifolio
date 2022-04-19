let order = [];
let clickedOrther = [];
let score = 0;

// 0 - amarelo
// 1 - azul
// 2 - verde
// 3 - vermelho

const cYellow = document.querySelector('.cYellow');
const cBlue = document.querySelector('.cBlue');
const cGreen = document.querySelector('.cGreen');
const cRed = document.querySelector('.cRed');

// Funcao para sortear numeros entre 0 e 3
    // Atribuicao da lista de numeros a "order"
let shuffleOrther = () => {
    let corSortida = Math.floor(Math.random() * 4);
    order[order.length] = corSortida;
    clickedOrther = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);    // Funcao de ordem de cores
        lightColor (elementColor, Number[i] + 1);
    }
}

let lightColor = (element, number) => {                 // Funcao para ascender e apagar cores
    number = number = 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let orderChecker = () => {                              // Configurando funcionamento e checagem
    for (let i in clickedOrther) {
        if (clickedOrther[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrther.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`);
        nextLevel();

    }
}

// Funcao click do jogador
let click = (color) => {
    clickedOrther[clickedOrther.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        orderChecker();
    },250);
}

// Funcao condicional para retornar a cor
let createColorElement = (color) => {
    if (color == 0) {
        return cYellow;
    }
    else if (color == 1) {
        return cBlue;
    }
    else if (color == 2) {
        return cGreen;
    }
    else if (color == 3) {
        return cRed;
    }
}

let nextLevel = () => {                                    // Funcao para proximo nivel
    score ++;
    shuffleOrther();
}

let lose = () => {                                  // Funcao para caso perca o jogo
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo.\nClique em Okay para recomeçar.`);
    order =[];
    clickedOrther = [];

    playGame();
}

let playGame = () => {                                     // Funcao iniciar o jogo
    alert(`Bem-vindo ao projeto Recriando o Genius!!\nIniciando nova partida...`)
    score = 0;

    nextLevel();
}

cYellow.onclick = () => click(0);
cBlue.onclick = () => click(1);
cGreen.onclick = () => click(2);
cRed.onclick = () => click(3);

playGame();     //Start
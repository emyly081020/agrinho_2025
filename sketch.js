// Lista de jogadores

let xJogadores = [450, 450, 450, 450];
let yJogadores = [100, 200, 300, 400];
let jogadores = ["🚶‍♂️", "🚶‍♀️", "🦖", "🏍️"];

// Configuração do tamanho da Tela
function setup() {
  createCanvas(500, 500);
}

function draw() {
  ativaJogo();
  criaJogadores();
  criaChegada();
  verificaGanhador();
}

// Cor de fundo da Tela ativado/desativado
function ativaJogo() {
  if (focused == true) {
    background("green");
  } else {
    background("red");
  }
}

// Cria os jogadores
function criaJogadores() {
  textSize(30);
  for (let i = 0; i < 4; i++) {
    text(jogadores[i], xJogadores[i], yJogadores[i]);
  }
}

// Cria linha de chegada
function criaChegada() {
  fill("white");
  rect(50, 0, 10, 500);

  fill("black");
  for (let yAtual = 10; yAtual < 500; yAtual += 20) {
    rect(50, yAtual, 10, 10);
  }
}

// Verifica quem ganhou
function verificaGanhador() {
  
  for(let i = 0; i < 4; i++){
    if (xJogadores[i] < 50) {
    fill("white");
    textSize(60)
    text(jogadores[i] + "venceu!", 80, 200);
    noLoop();
  }
  }

}

// Movimenta jogadores
function keyReleased() {
  if (key === "1") {
    xJogadores[0] -= random(20);
  }
  if (key === "3") {
    xJogadores[1] -= random(20);
  }
  if (key === "5") {
    xJogadores[2] -= random(20);
  }
  if (key === "7") {
    xJogadores[3] -= random(20);
  }
}

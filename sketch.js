let predios = [];
let carros = [];
let arvores = [];

function setup() {
  createCanvas(800, 500);

  // Criar prédios
  for (let i = 0; i < 6; i++) {
    predios.push({
      x: i * 130 + 30,
      y: random(200, 300),
      w: 100,
      h: random(150, 250),
      luzes: Array.from({ length: 6 }, () => false)
    });
  }

  // Criar carros
  for (let i = 0; i < 3; i++) {
    carros.push({
      x: random(width),
      y: 420,
      cor: color(random(255), random(255), random(255)),
      vel: random(2, 4)
    });
  }

  // Criar árvores
  for (let i = 0; i < 5; i++) {
    arvores.push({
      x: i * 150 + 80,
      y: 400,
    });
  }
}

function draw() {
  background(30, 30, 80); // Céu noturno

  // Desenhar prédios
  for (let p of predios) {
    fill(60);
    rect(p.x, p.y, p.w, p.h);

    // Janelas
    let janelaW = 20;
    let janelaH = 20;
    for (let i = 0; i < p.luzes.length; i++) {
      let jx = p.x + 20;
      let jy = p.y + 30 + i * 30;
      if (p.luzes[i]) {
        fill(255, 255, 100);
      } else {
        fill(20);
      }
      rect(jx, jy, janelaW, janelaH);
    }
  }

  // Rua
  fill(50);
  rect(0, 400, width, 100);

  // Carros
  for (let c of carros) {
    fill(c.cor);
    rect(c.x, c.y, 50, 25, 5);
    fill(0);
    ellipse(c.x + 10, c.y + 25, 15);
    ellipse(c.x + 40, c.y + 25, 15);

    c.x += c.vel;
    if (c.x > width) {
      c.x = -60;
    }
  }

  // Árvores
  for (let a of arvores) {
    // Tronco
    fill(100, 60, 20);
    rect(a.x, a.y - 40, 20, 40);

    // Copa da árvore (balança conforme mouseX)
    fill(0, 150, 0);
    ellipse(a.x + 10 + sin(frameCount * 0.05 + a.x) * (mouseX / 100), a.y - 60, 60, 60);
  }
}

// Acender luzes clicando
function mousePressed() {
  for (let p of predios) {
    for (let i = 0; i < p.luzes.length; i++) {
      let jx = p.x + 20;
      let jy = p.y + 30 + i * 30;
      if (mouseX > jx && mouseX < jx + 20 && mouseY > jy && mouseY < jy + 20) {
        p.luzes[i] = !p.luzes[i];
      }
    }
  }
}
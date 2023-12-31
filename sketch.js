//-------CONFIGURACION----

let AMP_MIN = 0.1; // umbral mínimo de amplitud. Señal que supera al ruido de fondo
let IMPRIMIR = false;

let AMP_MAX = 0.3;

//-----ENTRADA DE AUDIO----
let mic;

//-----AMPLITUD----

let amp;
let haySonido = false;

let p = [];
let p2 = [];
let p3 = [];
let p4 = [];
let cuadrados;
let capa;
let fondo;
let imagen;
let grafico;
let numero;



function setup() {
  createCanvas(600, 600);

  mic = new p5.AudioIn();
  mic.start();

  userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio. Esto hace un reset del motor de audio (audio context)
  fondo = createGraphics(width, height);
  grafico = createGraphics(imagen.width, imagen.height);

  for (let i = 0; i < 30; i++) {
    p.push(new Pincelada());
    p2.push(new Pincelada());
    p3.push(new Pincelada());
    p4.push(new Pincelada());
  }
  cuadrados = new Cuadrados();

  capa = 0;


}

function preload(){
  imagen = loadImage("/img/obra.jpg");
}

function draw() {

  amp = mic.getLevel();

  haySonido = amp > AMP_MIN;

  if (capa == 0) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        if (i % 2 == 0) {
          //p[i].dibujar(amp, fondo);
          p[i].dibujarGrafico(amp, fondo, grafico);
        } else {
          p[i].dibujar2(amp, fondo);
        }
      }
    }
    let copia = imagen.get();
    copia.mask(grafico);
    image(copia, 0, 0, width, height);
  }
  


  if (p[0].posY >= height + 30) {
    capa = 1;
  }
  if (capa == 1) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        if (i % 2 == 0) {
          p2[i].dibujar(amp, fondo);
        } else {
          p2[i].dibujar2(amp, fondo);
        }
      }
    }
  }

  if (p2[0].posY >= height) {
    capa = 2;
  }
  if (capa == 2) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        if (i % 2 == 0) {
          p3[i].dibujar(amp, fondo);
        } else {
          p3[i].dibujar2(amp, fondo);
        }
      }
    }
  }
  if (p3[0].posY >= height) {
    capa = 3;
  }
  if (capa == 3) {
    for (let i = 0; i < 30; i++) {
      if (haySonido) {
        if (i % 2 == 0) {
          p4[i].dibujar(amp, fondo);
        } else {
          p4[i].dibujar2(amp, fondo);
        }
      }
    }
  }
  if (p4[0].posY >= height) {
    capa = 4;
  }
  image(fondo, 0, 0);
  if (capa == 4) {
    cuadrados.dibujar(haySonido);
  }
  if (IMPRIMIR) {
    imprimirData();
  }
}

function imprimirData() {

  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp;
  text(texto, 10, 20);
  pop();

}

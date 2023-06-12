class Pincelada {

  constructor() {
    this.y = 0;
    this.counter = 0;
    this.posX = random(-50, width + 50);
    this.posY = 0;
    this.x = 0;
    this.tam = 30;
    this.cambiaColor = random(10, 30);
    this.brillo = random(80, 100);
    this.saturacion = random(70, 100);

  }

  dibujar(amplitud, fondo) {
    this.posY = this.y += 2;
    this.x = sin(this.counter) * 20 + this.posX;

    this.saturacion = map(amplitud, AMP_MIN, AMP_MAX, 80, 100);
    fondo.colorMode(HSB);
    fondo.fill(this.cambiaColor, this.brillo, this.saturacion);

    fondo.noStroke();
    fondo.ellipse(this.x, this.posY, this.tam, this.tam);

    this.counter += 0.05;

  }
  dibujar2(amplitud, fondo) {
    this.posY = this.y += 2;
    this.x = sin(this.counter) * 20 + this.posX;

    this.saturacion = map(amplitud, AMP_MIN, AMP_MAX, 50, 80);
    fondo.colorMode(HSB);
    fondo.fill(this.cambiaColor, this.brillo, this.saturacion);

    fondo.noStroke();
    fondo.ellipse(this.x, this.posY, this.tam, this.tam);

    this.counter += 0.03;
  }

  dibujarGrafico(amplitud, fondo, grafico) {
    this.posY = this.y += 2;
    this.x = sin(this.counter) * 20 + this.posX;

    this.saturacion = map(amplitud, AMP_MIN, AMP_MAX, 80, 100);
    grafico.colorMode(HSB);
    grafico.fill(0);

    grafico.noStroke();
    grafico.ellipse(this.x, this.posY, this.tam, this.tam);

    this.counter += 0.05;

  }
  
}
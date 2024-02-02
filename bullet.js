export default class Bullet {
  constructor(x, y, velocity, angle, audioContext) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.velocity = velocity;
    this.angle = angle;
    this.audioContext = audioContext;
    this.bulletImage = new Image();
    this.bulletImage.src = "images/bullet.png";
    this.bulletUpgrade = {
      damage: 2,
      color: "red",
    };
    this.audioBuffer = null; // Add an audio buffer for bullet sound
    // this.loadAudio("audio/bullet.mp3"); // Provide the path to your bullet sound file
  }

  //   loadAudio(url) {
  //     fetch(url)
  //       .then((response) => response.arrayBuffer())
  //       .then((buffer) => this.audioContext.decodeAudioData(buffer))
  //       .then((decodedBuffer) => {
  //         this.audioBuffer = decodedBuffer;
  //       })
  //       .catch((error) => console.error("Error loading audio:", error));
  //   }

  move() {
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
  }
  //creating ball isntad of image
  // draw(ctx) {
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //   ctx.fillStyle = this.bulletUpgrade.color;
  //   // ctx.drawImage(this.bulletImage - 20 / 2, -20 / 2, 20, 20);
  //   ctx.fill();
  //   ctx.closePath();
  // }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.direction);

    ctx.drawImage(this.bulletImage, -12, -this.bulletImage.height / 10, 20, 20);

    ctx.restore();
  }

  playAudio() {
    if (this.audioBuffer) {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.audioBuffer;

      const gainNode = this.audioContext.createGain();
      gainNode.gain.setValueAtTime(1, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        0,
        this.audioContext.currentTime + 2
      );

      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      source.start();
    }
  }
}

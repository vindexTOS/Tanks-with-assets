import { BulletModule } from "../Animations/AssetModule.js";
import stateManager from "../Store/StateManager.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";

export default class Bullet {
  constructor(x, y, velocity, angle, audioContext, demage) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.velocity = velocity;
    this.angle = angle;
    this.audioContext = audioContext;
    this.bulletImage = new Image();
    this.bulletImage.src = BulletModule.mediumShell;
    this.demage = demage;
    this.audioBuffer = null;

    // Add an audio buffer for bullet sound
    // this.loadAudio("audio/bullet.mp3"); // Provide the path to your bullet sound file
  }
  bullets = stateManager.getSharedState().bullets;
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
    if (this.demage === 2) {
      this.bulletImage.src = BulletModule.largeShell;
    } else if (this.demage === 3) {
      this.bulletImage.src = BulletModule.plasma;
    }
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle - Math.PI / 2);

    // ctx.drawImage(this.bulletImage, -12, -this.bulletImage.height / 2, 20, 20)

    ctx.drawImage(this.bulletImage, -34, -this.bulletImage.height / 10, 70, 70);

    ctx.restore();
  }
  removeBullet(x, y, index) {
    if (y <= 0 || x <= 0 || x > Screenwidth || y > Screenheight) {
      stateManager.removeBullet(index);
    }
  }
}

import Bullet from "./bullet.js";
import Animations from "./Animations.js";
import { AnimationsModlue } from "./AssetModule.js";
export default class Tank {
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;
  isShoot = true;
  isMoving = false;
  weaponePosition = {
    x: 5.3,
    y: 3,
  };
  constructor(
    x,
    y,
    tankWidth,
    tankHeight,
    audio,
    audioContext,
    hullSrc,
    tracksSrc,
    weaponSrc
  ) {
    this.x = x;
    this.y = y;
    this.width = tankWidth;
    this.velocity = 8;
    this.height = tankHeight;
    this.tankImage = new Image();
    this.tankImage.src = "images/tank.png";
    this.rotation = 0;
    this.audioContext = audioContext;
    this.audio = audio;
    this.audioBuffer = this.audioContext.createBufferSource();
    this.gainNode = this.audioContext.createGain();
    this.audioBuffer.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
    this.loadAudio("audio/tankmove.mp3");
    this.bullets = [];
    // tank assets

    this.hullSrc = hullSrc;
    this.tracksSrc = tracksSrc;
    this.weaponSrc = weaponSrc;

    this.hull = new Image();
    this.hull.src = this.hullSrc;
    this.tracks = new Image();

    this.tracks.src = this.tracksSrc[0];

    this.weapon = new Image();
    this.weapon.src = this.weaponSrc;
    //  fire shooting
    this.FireFlame = new Image();
    this.FireFlame.src = AnimationsModlue.fireFlameAnimation[1];
  }

  animationModule = new Animations();

  loadAudio(url) {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => this.audioContext.decodeAudioData(buffer))
      .then((decodedBuffer) => {
        this.audioBuffer.buffer = decodedBuffer;
      })
      .catch((error) => console.error("Error loading audio:", error));
  }
  shoot() {
    this.isShoot = false;
    const bullet = new Bullet(
      this.x + this.width / 2,
      this.y + this.height / 2,
      15,
      this.rotation - Math.PI / 2,
      this.audioContext
    );
    this.weaponePosition.y = 3.5;
    setTimeout(() => {
      this.weaponePosition.y = 3;
    }, 200);
    // bullet.playAudio();
    this.bullets.push(bullet);
  }
  drawTank(ctx) {
    ctx.save();

    this.move();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    if (!this.isShoot) {
      this.FireFlame.src =
        AnimationsModlue.fireFlameAnimation[Math.floor(Math.random() * 9)];
      ctx.drawImage(
        this.FireFlame,
        -this.width / 2,
        -this.height / 4,
        this.width,
        this.height - 180
      );
    }
    while (this.isMoving) {
      this.animationModule.gasAnimation(ctx);
      this.tracks.src = this.tracksSrc[Math.floor(Math.random() * 2)];

      break;
    }

    ctx.drawImage(this.tracks, -this.width / 2.7, -this.height / 2.2, 15, 78);
    ctx.drawImage(this.tracks, -this.width / -5.7, -this.height / 2.2, 15, 78);

    ctx.drawImage(
      this.hull,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.weapon,
      -this.width / this.weaponePosition.x,
      -this.height / this.weaponePosition.y,
      30,
      50
    );

    ctx.restore();
  }

  draw(ctx) {
    this.drawTank(ctx);
  }

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x += -this.velocity;
    } else if (this.upPressed) {
      this.y += -this.velocity;
    } else if (this.downPressed) {
      this.y += this.velocity;
    }
  }
  moveLeft() {
    this.rotation = -Math.PI / 2;
    this.playAudio();
    this.rightPressed = false;
    this.leftPressed = true;
    this.isMoving = true;
  }

  moveRight() {
    this.rotation = Math.PI / 2;
    this.playAudio();
    this.leftPressed = false;
    this.rightPressed = true;
    this.isMoving = true;
  }

  moveUp() {
    this.rotation = 0;
    this.playAudio();
    this.downPressed = false;
    this.upPressed = true;
    this.isMoving = true;
  }

  moveDown() {
    this.rotation = Math.PI;
    this.playAudio();
    this.upPressed = false;
    this.downPressed = true;
    this.isMoving = true;
  }

  playAudio() {
    const source = this.audioContext.createBufferSource();
    source.buffer = this.audioBuffer.buffer;

    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(1, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 2);

    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    source.start();

    this.currentSourceNode = source;
  }

  stopAudio() {
    if (this.currentSourceNode) {
      this.currentSourceNode.stop();
      this.currentSourceNode = null;
    }
  }
}

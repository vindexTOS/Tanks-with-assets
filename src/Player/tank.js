import Bullet from "./bullet.js";
import Animations from "../Animations/Animations.js";
import { AnimationsModlue } from "../Animations/AssetModule.js";
import stateManager from "../Store/StateManager.js";
export default class Tank {
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;
  isShoot = true;
  isMoving = false;
  isPlayingSound = true;
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
    weaponSrc,
    canvasWeidth,
    canvasHeight,
    obstacles
  ) {
    this.x = x;
    this.y = y;
    this.width = tankWidth;
    this.velocity = 8;
    this.height = tankHeight;
    this.canvasHeight = canvasHeight;
    this.canvasWeidth = canvasWeidth;
    this.obstacles = obstacles;
    this.rotation = 0;
    this.audioContext = audioContext;
    this.audio = audio;
    this.audioBuffer = this.audioContext.createBufferSource();
    this.gainNode = this.audioContext.createGain();
    this.audioBuffer.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
    this.loadAudio("assets/audio/tigermoving.mp3");

    this.bullets = stateManager.getSharedState().bullets;
    this.lifes = stateManager.getSharedState().tankLives;
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
    // life
    this.tankStats = {
      velocity: 8,
      lifes: stateManager.getSharedState().tankLives,
      demage: 0.5,
      bulletSpeed: 7,
    };
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

    // Create a new Audio instance for each shot
    const shootingAudio = new Audio("assets/audio/tankshoot.mp3");

    const bullet = new Bullet(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.tankStats.bulletSpeed,
      this.rotation - Math.PI / 2,
      this.audioContext,
      this.tankStats.demage
    );

    this.weaponePosition.y = 3.5;

    setTimeout(() => {
      this.playShoot(shootingAudio);
      this.weaponePosition.y = 3;
    }, 200);

    stateManager.addBullet(bullet);
  }
  hitTreshhold = 40;
  isHit = false;
  getHit(x, y, index) {
    const adjustedX = x - (this.x + this.width / 2);
    const adjustedY = y - (this.y + this.height / 2);
    if (
      Math.abs(adjustedX) <= this.hitTreshhold &&
      Math.abs(adjustedY) <= this.hitTreshhold
    ) {
      const gettingHit = new Audio("assets/audio/GettingHit.mp3");
      this.isHit = true;
      stateManager.removeEnemyBullet(index);
      stateManager.removeLife();
      this.tankStats.lifes = stateManager.getSharedState().tankLives;
      gettingHit.play();
    }
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
    if (this.isHit) {
      this.animationModule.explosionAnimation(ctx);
      setTimeout(() => {
        this.isHit = false;
      }, 300);
    }
    ctx.restore();
  }

  draw(ctx) {
    this.drawTank(ctx);
  }

  move() {
    this.obstacles.find((val) => {
      const { x, y, width, height } = val;

      const radiusX = width / 2;
      const radiusY = height / 2;

      const deltaX = this.x - x;
      const deltaY = this.y - y;

      const combinedRadius =
        Math.max(this.width / 2, this.height / 2) + Math.max(radiusX, radiusY);
      // console.log(deltaX, deltaY);
      if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= combinedRadius) {
        if (deltaX < width - width / 2) {
          this.x -= 9;
        }
        if (deltaX > -width + width / 2) {
          this.x += 9;
        }
        if (deltaY < height - height / 2) {
          this.y -= 9;
        }

        if (deltaY > -height + height / 2) {
          this.y += 9;
        }
        return true;
      }

      return false;
    });

    // console.log(this.obstacles);
    if (this.tankStats.lifes > 0) {
      if (this.rightPressed && this.x + this.width < this.canvasWeidth) {
        this.x += this.tankStats.velocity;
      } else if (this.leftPressed && this.x >= 0) {
        this.x -= this.tankStats.velocity;
      } else if (this.upPressed && this.y > 0) {
        this.y -= this.tankStats.velocity;
      } else if (this.downPressed && this.y + this.height < this.canvasHeight) {
        this.y += this.tankStats.velocity;
      }
    }
  }
  moveLeft() {
    this.rotation = -Math.PI / 2;
    if (!this.isMoving) {
      this.playAudio();
      this.isMoving = true;
    }
    this.rightPressed = false;
    this.leftPressed = true;
    this.isMoving = true;
  }

  moveRight() {
    this.rotation = Math.PI / 2;
    if (!this.isMoving) {
      this.playAudio();
      this.isMoving = true;
    }
    this.leftPressed = false;
    this.rightPressed = true;
    this.isMoving = true;
  }

  moveUp() {
    this.rotation = 0;
    if (!this.isMoving) {
      this.playAudio();
      this.isMoving = true;
    }
    this.downPressed = false;
    this.upPressed = true;
  }

  moveDown() {
    this.rotation = Math.PI;
    if (!this.isMoving) {
      this.playAudio();
      this.isMoving = true;
    }
    this.upPressed = false;
    this.downPressed = true;
  }
  //  audios

  playShoot(shootingAudio) {
    shootingAudio.play();
  }
  playAudio() {
    if (!this.isAudioPlaying) {
      const source = this.audioContext.createBufferSource();
      source.buffer = this.audioBuffer.buffer;

      const gainNode = this.audioContext.createGain();
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        1,
        this.audioContext.currentTime + 1
      ); // Fade in

      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      source.start();

      this.currentSourceNode = source;
      this.gainNode = gainNode; // Store the gainNode for later use
      this.isAudioPlaying = true;

      // Add an event listener to detect when the audio ends
      source.onended = () => {
        // Fade out when the sound stops
        this.stopAudio();
      };
    }
  }

  stopAudio() {
    if (this.isAudioPlaying && this.currentSourceNode) {
      const source = this.currentSourceNode;
      const gainNode = this.gainNode;

      if (gainNode) {
        // Start fading out from the current gain value
        gainNode.gain.setValueAtTime(
          gainNode.gain.value,
          this.audioContext.currentTime
        );

        // Fade out over 1 second (adjust the duration as needed)
        gainNode.gain.linearRampToValueAtTime(
          0,
          this.audioContext.currentTime + 1
        );

        // Stop the audio after the fade-out
        source.stop(this.audioContext.currentTime + 1);

        this.isAudioPlaying = false;
      }
    }
  }
}

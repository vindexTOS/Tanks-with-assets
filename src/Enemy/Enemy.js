import Animations from "../Animations/Animations.js";
import { AnimationsModlue } from "../Animations/AssetModule.js";
import Bullet from "../Player/bullet.js";
import stateManager from "../Store/StateManager.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";

export default class Enemy {
  weaponePosition = {
    x: 5.3,
    y: 3,
  };
  constructor(
    id,
    x,
    y,
    tankWidth,
    tankHeight,

    hullSrc,
    tracksSrc,
    weaponSrc,
    canvasWeidth,
    canvasHeight,
    velocity,
    obstacles,
    enemyTankLife,
    demage,
    EndlessSurvior,
    isAlive
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = tankWidth;
    this.velocity = velocity;
    this.obstacles = obstacles;
    this.height = tankHeight;
    this.canvasHeight = canvasHeight;
    this.canvasWeidth = canvasWeidth;
    this.rotation = Math.PI;
    this.hullSrc = hullSrc;
    this.tracksSrc = tracksSrc;
    this.weaponSrc = weaponSrc;
    this.EndlessSurvior = EndlessSurvior;
    this.isAlive = isAlive;
    this.hull = new Image();
    this.hull.src = this.hullSrc;
    this.tracks = new Image();
    this.hasRunOnce = false;

    this.tracks.src = this.tracksSrc[0];

    this.weapon = new Image();
    this.weapon.src = this.weaponSrc;

    this.enemyBullets = stateManager.getSharedState().enemyBullets;
    this.enemyTankLife = enemyTankLife;
    this.demage = demage;
  }
  hitTreshhold = 40;
  isHit = false;

  animationModule = new Animations();
  pointsEXPArr = [
    200, 300, 400, 100, 40, 650, 350, 20, 10, 6, 50, 2, 10, 1, 1, 1, 1, 400,
    700,
  ];
  isShoot = [false, true, false, true, false, true, true, true, true];
  enemyRandomMovmentMap = [
    "left",
    "right",
    "down",

    "up",
    "left",
    "right",
    "up",
    "down",
  ];

  currentDirectionTimer = 0;
  randomDirection = Math.floor(Math.random() * 3);
  timeSetterIntervalId = null;
  timeRandomShootIntervalId = null;
  randomShoot = 0;

  timeSetter() {
    if (this.timeSetterIntervalId !== null) {
      clearInterval(this.timeSetterIntervalId);
    }

    this.timeSetterIntervalId = setInterval(() => {
      this.randomDirection = Math.floor(Math.random() * 8);
      this.randomShoot = Math.floor(Math.random() * this.isShoot.length);

      setTimeout(() => {
        this.randomDirection = Math.floor(Math.random() * 8);
      }, 200);
    }, 100);
  }

  randomShooting() {
    if (this.timeRandomShootIntervalId === null) {
      this.timeRandomShootIntervalId = setInterval(() => {
        this.randomShoot = Math.floor(Math.random() * this.isShoot.length);
        setTimeout(() => {
          this.randomShoot = Math.floor(Math.random() * this.isShoot.length);
        }, 200);
      }, 100);
    } else {
      clearInterval(this.timeRandomShootIntervalId);
      this.timeRandomShootIntervalId = null;
    }
  }

  shootTimeIntervalId = null;
  shoot() {
    // this.isShoot = false
    // const shootingAudio = new Audio('audio/tankshoot.mp3')

    if (this.isShoot[this.randomShoot]) {
      const bullet = new Bullet(
        this.x + this.width / 2,
        this.y + this.height / 2,
        3,
        this.rotation - Math.PI / 2,
        this.audioContext,
        1
      );

      this.weaponePosition.y = 3.5;

      // this.playShoot(shootingAudio)
      this.weaponePosition.y = 3;

      this.isShoot[this.randomShoot] = false;
      this.isShoot[this.randomShoot - 1] = true;
      this.isShoot[this.randomShoot + 1] = true;
      stateManager.addEnemyBullets(bullet);
    }
  }

  removeBullet(x, y, index) {
    if (y <= 0 || x <= 0 || x > Screenwidth || y > Screenheight) {
      stateManager.removeEnemyBullet(index);
    }
  }
  randomMovement() {
    this.obstacles?.find((val) => {
      const { x, y, width, height } = val;

      const radiusX = width / 2;
      const radiusY = height / 2;

      const deltaX = this.x - x;
      const deltaY = this.y - y;

      const combinedRadius =
        Math.max(this.width / 2, this.height / 2) + Math.max(radiusX, radiusY);

      if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= combinedRadius) {
        if (deltaX < width - width / 2) {
          this.x -= 9;
          this.randomDirection = Math.floor(Math.random() * 8);
        }
        if (deltaX > -width + width / 2) {
          this.x += 9;
          this.randomDirection = Math.floor(Math.random() * 8);
        }
        if (deltaY < height - height / 2) {
          this.y -= 9;
          this.randomDirection = Math.floor(Math.random() * 8);
        }

        if (deltaY > -height + height / 2) {
          this.y += 9;
          this.randomDirection = Math.floor(Math.random() * 8);
        }
        return true;
      }

      return false;
    });
    switch (this.enemyRandomMovmentMap[this.randomDirection]) {
      case "left":
        if (this.x - this.velocity > 0) {
          this.rotation = -Math.PI / 2;
          this.x -= this.velocity;
          this.timeSetter();
        }
        break;
      case "right":
        if (this.x + this.velocity < this.canvasWeidth - 60) {
          this.x += this.velocity;
          this.rotation = Math.PI / 2;
          this.timeSetter();
        }
        break;
      case "up":
        if (this.y - this.velocity >= 0) {
          this.rotation = 0;
          this.y -= this.velocity;
          this.timeSetter();
        }
        break;
      case "down":
        if (this.y + this.velocity < this.canvasHeight - 60) {
          this.rotation = Math.PI;
          this.y += this.velocity;
          this.timeSetter();
        }
        break;
      default:
        break;
    }

    this.currentDirectionTimer = this.timeToChangeDirection;
  }

  getHit(x, y, index, demage) {
    const adjustedX = x - (this.x + this.width / 2);
    const adjustedY = y - (this.y + this.height / 2);

    if (
      Math.abs(adjustedX) <= this.hitTreshhold &&
      Math.abs(adjustedY) <= this.hitTreshhold
    ) {
      this.enemyTankLife -= demage;

      if (this.enemyTankLife >= 1) {
        let randomPoints =
          this.pointsEXPArr[
            Math.floor(Math.random() * this.pointsEXPArr.length)
          ];
        stateManager.setMoney(randomPoints);
      }

      stateManager.removeBullet(index, demage);
      const getHit = new Audio("assets/audio/HitMarker.mp3");
      getHit.play();
      this.isHit = true;
    }
  }
  drawTank(ctx) {
    ctx.save();

    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    ctx.rotate(this.rotation);

    if (this.enemyTankLife <= 0 && !this.hasRunOnce) {
      this.hasRunOnce = true;
      stateManager.setEnemyDestroyCounter();
    }
    while (this.enemyTankLife > 0) {
      this.animationModule.gasAnimation(ctx);
      this.tracks.src = this.tracksSrc[Math.floor(Math.random() * 2)];
      this.randomMovement();
      this.randomShooting();
      this.shoot();

      break;
    }

    if (this.enemyTankLife === 0 || this.enemyTankLife <= 0) {
      this.weapon.src = "";
      this.EndlessSurvior(this.id, false);
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
    if (this.enemyTankLife <= 0) {
      this.animationModule.tankExplotion(ctx, this.enemyTankLife);
    }
    ctx.restore();
  }
}

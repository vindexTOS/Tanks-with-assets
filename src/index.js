import Tank from "./Player/tank.js";
import Enemy from "./Enemy/Enemy.js";
import Block from "./Obstacles/Block.js";
import { PlayerTank, EnemyTank } from "./Animations/AssetModule.js";

import { Screenwidth, Screenheight } from "./Globals/GLOBAL.js";
import Animations from "./Animations/Animations.js";
import { EnemySwarm } from "./ENEMY_SWARMS/Level_1.js";
import { firstLevelBlocks } from "./Obstacles/ObstaclesModel.js";
import LevelOne from "./Levels/Level_1.js";
const canvas = document.getElementById("game");
const audio = document.getElementById("audio");
const ctx = canvas.getContext("2d");
const width = (canvas.width = Screenwidth);
const height = (canvas.height = Screenheight);
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const background = new Image();
const { hull, tracks, weapone } = PlayerTank;
const animations = new Animations();
background.src = "assets/images/original.jpg";

const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  Space: false,
};

function handleKeyDown(event) {
  keys[event.code] = true;
}

function handleKeyUp(event) {
  keys[event.code] = false;
  handleMovement();
}

function handleMovement() {
  tank.leftPressed = keys.ArrowLeft;
  tank.rightPressed = keys.ArrowRight;
  tank.upPressed = keys.ArrowUp;
  tank.downPressed = keys.ArrowDown;
  tank.shootPressed = keys.Space;

  if (tank.leftPressed) {
    tank.moveLeft();
  } else if (tank.rightPressed) {
    tank.moveRight();
  } else if (tank.upPressed) {
    tank.moveUp();
  } else if (tank.downPressed) {
    tank.moveDown();
  }

  if (
    tank.leftPressed ||
    tank.rightPressed ||
    tank.upPressed ||
    tank.downPressed
  ) {
    tank.isMoving = true;
  } else {
    tank.isMoving = false;
    tank.stopAudio();
  }
}
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (tank.isShoot) {
      tank.shoot();
    }
    document.addEventListener("keyup", () => {
      tank.isShoot = true;
    });
  }
});
const tank = new Tank(
  600,
  600,
  80,
  80,
  audio,
  audioContext,
  hull,
  tracks,
  weapone,
  width,
  height,
  firstLevelBlocks
);
const enemyTankInstances = EnemySwarm.map((enemyTank) => {
  const {
    x,
    y,
    tankWidth,
    tankHeight,
    hullSrc,
    tracksSrc,
    weaponSrc,

    velocity,
    ObstacleBlocks,
  } = enemyTank;

  return new Enemy(
    x,
    y,
    tankWidth,
    tankHeight,
    hullSrc,
    tracksSrc,
    weaponSrc,
    width,
    height,
    velocity,
    ObstacleBlocks
  );
});

const level = new LevelOne(
  tank,
  background,
  enemyTankInstances,
  tank,
  audio,
  Screenwidth,
  Screenheight,
  animations,
  firstLevelBlocks
);

function gameLoop() {
  handleMovement();

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(background, 0, 0, width, height);

  level.draw(ctx);
  // enemyTankInstances.forEach((enemy) => {
  //   enemy.enemyBullets.forEach((bullet, index) => {
  //     bullet.move();
  //     bullet.draw(ctx);
  //     enemy.removeBullet(bullet.x, bullet.y, index);
  //     tank.getHit(bullet.x, bullet.y, index);
  //   });
  //   tank.bullets.forEach((bullet, index) => {
  //     bullet.move();
  //     bullet.draw(ctx);
  //     bullet.removeBullet(bullet.x, bullet.y, index);
  //     enemy.getHit(bullet.x, bullet.y, index);
  //   });
  //   enemy.drawTank(ctx);
  // });
  // firstLevelBlocks.map((block) => {
  //   const { x, y, width, height, color } = block;
  //   let newblock = new Block(x, y, width, height, color);
  //   newblock.draw(ctx);
  // });

  animations.drawLifeHearts(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

import Tank from "./tank.js";
import Enemy from "./Enemy.js";
import { PlayerTank, EnemyTank } from "./AssetModule.js";
import EnemyController from "./EnemyController.js";
import { Screenwidth, Screenheight } from "./GLOBAL.js";
const canvas = document.getElementById("game");
const audio = document.getElementById("audio");
const ctx = canvas.getContext("2d");
const width = (canvas.width = Screenwidth);
const height = (canvas.height = Screenheight);
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const enemyTankBuild = EnemyTank("D", "1", "2");
const background = new Image();
const { hull, tracks, weapone } = PlayerTank;
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
  height
);
const enemyTank = new Enemy(
  600,
  0,
  80,
  80,
  enemyTankBuild.hull,
  enemyTankBuild.tracks,
  enemyTankBuild.weapone,
  width,
  height
);

const enemyController = new EnemyController(enemyTank);
background.src = "images/ground.jpg";

function handleKeyDown(event) {
  switch (event.code) {
    case "ArrowLeft":
      tank.moveLeft();
      break;
    case "ArrowRight":
      tank.moveRight();
      break;
    case "ArrowUp":
      tank.moveUp();
      break;
    case "ArrowDown":
      tank.moveDown();
      break;
  }
}
function handleMovment() {
  tank.rightPressed = false;
  tank.leftPressed = false;
  tank.upPressed = false;
  tank.downPressed = false;
  tank.shootPressed = false;
}
function handleKeyUp(event) {
  handleMovment();
  setTimeout(() => {
    if (
      event.code === "ArrowLeft" ||
      event.code === "ArrowRight" ||
      event.code === "ArrowUp" ||
      event.code === "ArrowDown"
    ) {
      tank.stopAudio();
      tank.isMoving = false;
    }
  }, 200);
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
function gameLoop() {
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(background, 0, 0, width, height);
  enemyController.draw(ctx);
  tank.draw(ctx);
  tank.bullets.forEach((bullet, index) => {
    bullet.move();
    bullet.draw(ctx);
    bullet.removeBullet(bullet.x, bullet.y, index);
    enemyTank.getHit(bullet.x, bullet.y);
  });
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

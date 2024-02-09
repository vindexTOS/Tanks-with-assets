import Tank from "./Player/tank.js";
import Block from "./Obstacles/Block.js";
import { PlayerTank, EnemyTank } from "./Animations/AssetModule.js";
import stateManager from "./Store/StateManager.js";
import { Screenwidth, Screenheight } from "./Globals/GLOBAL.js";
import Animations from "./Animations/Animations.js";
 
import { firstLevelBlocks } from "./Obstacles/ObstaclesModel.js";
import LevelBuilder from "./Levels/Level_Builder.js";
import { enemyTankInstances } from "./ENEMY_SWARMS/Level_1.js";
const canvas = document.getElementById("game");
canvas.style.display = "none";
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
// menu

let stats = document.getElementById("stats");
stats.style.display = "flex";
let menu = document.getElementById("menu");
let start = false;
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  start = true;

  requestAnimationFrame(gameLoop);
  menu.style.display = "none";
  canvas.style.display = "flex";
  stats.style.display = "flex";
});
// stats menu

function drawHeart() {
  const numLives = stateManager.getSharedState().tankLives;
  console.log(numLives);
  document.getElementById("stats").innerHTML = "";

  for (let i = 0; i < numLives; i++) {
    let newImg = document.createElement("img");

    newImg.src = "./assets/images/life.png";
    newImg.style.width = "50px";
    document.getElementById("stats").appendChild(newImg);
  }
}
//  movments
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

const level = new LevelBuilder(
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
  if (start) {
    handleMovement();
    drawHeart();
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(background, 0, 0, width, height);
    level.draw(ctx);

    // animations.drawLifeHearts(ctx);
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);

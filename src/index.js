import Tank from "./Player/tank.js";
import Block from "./Obstacles/Block.js";
import { PlayerTank, EnemyTank } from "./Animations/AssetModule.js";
import stateManager from "./Store/StateManager.js";
import { Screenwidth, Screenheight } from "./Globals/GLOBAL.js";
import Animations from "./Animations/Animations.js";
import { firstLevelBlocks } from "./Obstacles/ObstaclesModel.js";
import SurvivalLevel from "./ENEMY_SWARMS/Level_1.js";

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
//  store
let money = document.getElementById("money");

money.style.display = "none";

let store = document.getElementById("store");
store.style.display = "none";

let openStore = document.getElementById("storeOpen");
let closeStore = document.getElementById("close-store");
openStore.addEventListener("click", () => {
  store.style.display = "flex";
  stateManager.Start();
  start = stateManager.getSharedState().start;
});
closeStore.addEventListener("click", () => {
  store.style.display = "none";
  stateManager.Start();
  start = stateManager.getSharedState().start;
  requestAnimationFrame(gameLoop);
});
// start

let stats = document.getElementById("stats");
stats.style.display = "flex";
let menu = document.getElementById("menu");
let start = stateManager.getSharedState().start;
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  stateManager.Start();

  start = stateManager.getSharedState().start;

  requestAnimationFrame(gameLoop);
  menu.style.display = "none";
  money.style.display = "flex";
  pause.style.display = "flex";
  canvas.style.display = "flex";
  stats.style.display = "flex";
});

// pause
let pause = document.getElementById("pause");
pause.style.display = "none";
pause.addEventListener("click", () => {
  stateManager.Start();
  start = stateManager.getSharedState().start;
  requestAnimationFrame(gameLoop);

  menu.style.display = "none";
  canvas.style.display = "flex";
  stats.style.display = "flex";
});
//

// stats menu
function drawStats() {
  const numLives = stateManager.getSharedState().tankLives;
  const enemyCount = stateManager.getSharedState().enemyCount;
  const roundCount = stateManager.getSharedState().survivalLevel;
  document.getElementById("lives").innerHTML = "";
  let points = stateManager.getSharedState().playerPoints;

  for (let i = 0; i < numLives; i++) {
    let newImg = document.createElement("img");

    newImg.src = "./assets/images/life.png";
    newImg.style.width = "50px";
    document.getElementById("lives").appendChild(newImg);
  }
  document.getElementById("enemyTanks").innerHTML = "";
  for (let i = 0; i < enemyCount; i++) {
    let newImg = document.createElement("img");

    newImg.src = "./assets/images/enemyTankCount.png";
    newImg.style.width = "50px";
    document.getElementById("enemyTanks").appendChild(newImg);
  }
  document.getElementById("rounds").innerHTML = `Round: ${roundCount}`;
  money.innerHTML = `$ ${points}`;
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
const survivalLevel = new SurvivalLevel(tank, background, audio, animations);
function gameLoop() {
  if (start) {
    handleMovement();
    drawStats();
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(background, 0, 0, width, height);

    survivalLevel.drawLevel(ctx);

    // animations.drawLifeHearts(ctx);
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);

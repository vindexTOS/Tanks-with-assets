import { firstLevelBlocks } from "../Obstacles/ObstaclesModel.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";
import Enemy from "../Enemy/Enemy.js";
import LevelBuilder from "../Levels/Level_Builder.js";
import stateManager from "../Store/StateManager.js";
import Drops from "../Drops/Drops.js";
import {
  survivalDrops as drops,
  dropPossitionsAndTimes,
  dropTimeIntervalTime,
} from "../Drops/SurvivalLevelDrops.js";
const PngUrl = "assets/PNG/";
const EffectUrl = `${PngUrl}Effects/Sprites/`;

const Hull = (color, hull) => {
  return `assets/PNG/Hulls_Color_${color}/Hull_0${hull}.png`;
};
const Weapone = (color, weapon) => {
  return `${PngUrl}Weapon_Color_${color}/Gun_0${weapon}.png`;
};
const Tracks = [
  `${PngUrl}Tracks/Track_1_A.png`,
  `${PngUrl}Tracks/Track_2_A.png`,
];
let roundStartBtn = document.getElementById("round-start");

let EnemySwarm = [
  {
    id: 0,
    Screenheight,
    x: 200,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("D", "1"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("C", "3"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 1,
    demage: 1,
    isAlive: true,
  },
  {
    id: 1,
    x: 100,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("A", "1"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("C", "3"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 1,
    demage: 1,
    isAlive: true,
  },
  // {
  //   id: 2,
  //   x: 300,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("B", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 3,
  //   obstacles: firstLevelBlocks,
  //   lives: 1,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 3,
  //   x: 900,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("A", "1"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 3,
  //   obstacles: firstLevelBlocks,
  //   lives: 1,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 4,
  //   x: 850,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,
  //   hullSrc: Hull("C", "2"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 4,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 5,
  //   x: 700,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("A", "3"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 2,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 6,
  //   x: 650,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("C", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 2,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 7,
  //   x: 650,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("C", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 2,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 8,
  //   x: 650,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("C", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 2,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 9,
  //   x: 650,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("C", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 1,
  //   obstacles: firstLevelBlocks,
  //   lives: 2,
  //   demage: 1,
  //   isAlive: true,
  // },
  // {
  //   id: 10,
  //   x: 650,
  //   y: 0,
  //   tankWidth: 80,
  //   tankHeight: 80,

  //   hullSrc: Hull("C", "6"),
  //   tracksSrc: Tracks,
  //   weaponSrc: Weapone("B", "2"),
  //   Screenwidth: Screenwidth,
  //   Screenheight: Screenheight,
  //   velocity: 3,
  //   obstacles: firstLevelBlocks,
  //   lives: 1,
  //   demage: 1,
  //   isAlive: true,
  // },
];

let randomItem = [
  { type: "xp", value: 3000, img: "assets/images/XP.png" },
  { type: "life", value: 1, img: "assets/images/life.png" },
];

export default class SurvivalLevel {
  constructor(tank, background, audio, animations) {
    this.tank = tank;
    this.background = background;
    this.audio = audio;
    this.animations = animations;
    this.startSecondRound = this.startSecondRound.bind(this);
    this.isDropped = false;
    stateManager.setEnemySwarm(EnemySwarm);
    this.randomIndex = Math.floor(Math.random() * drops.length);

    this.EnemySwarm = stateManager.getSharedState().enemySwarm;
    this.enemyTankInstances = this.EnemySwarm.map((enemyTank) => {
      const {
        id,
        x,
        y,
        tankWidth,
        tankHeight,
        hullSrc,
        tracksSrc,
        weaponSrc,

        velocity,
        obstacles,
        lives,
        demage,
        isAlive,
      } = enemyTank;

      return new Enemy(
        id,
        x,
        y,
        tankWidth,
        tankHeight,
        hullSrc,
        tracksSrc,
        weaponSrc,
        Screenwidth,
        Screenheight,
        velocity,
        obstacles,
        lives,
        demage,
        this.EndlessSurvior,
        isAlive
      );
    });
    this.level = new LevelBuilder(
      this.tank,
      this.background,
      this.enemyTankInstances,
      this.tank,
      this.audio,
      Screenwidth,
      Screenheight,
      this.animations,
      firstLevelBlocks
    );

    stateManager.setEnemyTankCounter(this.EnemySwarm);
  }
  newSwarm = null;
  isRoundEnd = false;
  EndlessSurvior = (id, dmg) => {
    let DeadEnemyCounte = [...this.EnemySwarm];
    DeadEnemyCounte.map((val) => {
      if (val.id == id) {
        val.isAlive = dmg;
      }
    });

    let DestroyedTanks = DeadEnemyCounte.filter((val) => val.isAlive);
    stateManager.setEnemyTankCounter(DestroyedTanks);
    let newArr = [...this.EnemySwarm];

    if (DestroyedTanks.length <= 0) {
      this.newSwarm = newArr.map((val) => {
        const updatedEnemy = {
          ...val,
          lives: val.lives + 1,
          velocity: val.velocity + 1,
          isAlive: true,
        };
        this.isRoundEnd = true;
        stateManager.setIsRoundBtnShow();
        roundStartBtn.style.display = "flex";
        return updatedEnemy;
      });
    }
  };

  startSecondRound() {
    if (this.isRoundEnd) {
      let randomIndex = Math.floor(Math.random() * randomItem.length);
      const { type, value, img } = randomItem[randomIndex];
      this.i = 0;
      this.newDrop.isActive = true;
      this.newDrop.x =
        dropPossitionsAndTimes[
          Math.floor(Math.random() * dropPossitionsAndTimes.length)
        ];
      this.newDrop.img = img;
      this.newDrop.type = type;
      this.newDrop.value = value;
      stateManager.setIsRoundOver(false);
      this.isRoundEnd = false;
      roundStartBtn.style.display = "none";
      stateManager.setSurvivalLevel();
      stateManager.setMoney(9);
      stateManager.setEnemySwarm(this.newSwarm);
      this.EnemySwarm = stateManager.getSharedState().enemySwarm;
      stateManager.setEnemyTankCounter(this.EnemySwarm);
      let newInstance = this.EnemySwarm.map((enemyTank) => {
        const {
          id,
          x,
          y,
          tankWidth,
          tankHeight,
          hullSrc,
          tracksSrc,
          weaponSrc,

          velocity,
          obstacles,
          lives,
          demage,
          isAlive,
        } = enemyTank;

        return new Enemy(
          id,
          x,
          y,
          tankWidth,
          tankHeight,
          hullSrc,
          tracksSrc,
          weaponSrc,
          Screenwidth,
          Screenheight,
          velocity,
          obstacles,
          lives,
          demage,
          this.EndlessSurvior,
          isAlive
        );
      });
      this.level = new LevelBuilder(
        this.tank,
        this.background,
        newInstance,
        this.tank,
        this.audio,
        Screenwidth,
        Screenheight,
        this.animations,
        firstLevelBlocks
      );
    }
  }
  //  random drop funcctionality
  newDrop = drops[this.randomIndex];
  possiblePosstions = [300, 350, 400];
  getPoints() {
    this.randomIndex = Math.floor(Math.random() * drops.length);
    this.newDrop = drops[this.randomIndex];
    const { x, y, width, height, img, type, value, isActive } = this.newDrop;
    return new Drops(x, y, width, height, img, type, value, isActive);
  }
  points = null;

  pickARandomSpot() {
    this.randomIndex = Math.floor(Math.random() * drops.length);
    console.log(drops);
    this.newDrop = drops[this.randomIndex];
    this.newDrop.x =
      this.possiblePosstions[
        Math.floor(Math.random() * this.possiblePosstions.length)
      ];
    console.log(this.newDrop.x);
    this.newDrop.isActive = true;
  }

  dropTimeSetter(i) {
    dropPossitionsAndTimes.forEach((val) => {
      if (val === i) {
        console.log(val, i);
        this.pickARandomSpot();
      }
    });
  }
  dropTimeIntervalSetter(i, ctx) {
    dropTimeIntervalTime.forEach((val) => {
      const { start, end } = val;

      if (i >= start && i <= end) {
        return this.points.draw(ctx);
      }
    });
  }
  dropSelector(i, ctx) {
    this.points = this.getPoints();
    this.pickUpDrop({ ...this.points });
    this.dropTimeIntervalSetter(i, ctx);
  }

  pickUpDrop({
    x: dropX,
    y: dropY,
    width,
    height,
    img,
    type,
    value,
    isActive,
  }) {
    this.points = this.getPoints();
    const radiusX = width / 3;
    const radiusY = height / 2;
    const combinedRadius =
      Math.max(width / 2, height / 2) + Math.max(radiusX, radiusY) + 20;

    const tankCenterX = this.tank.x + this.tank.width / 4;
    const tankCenterY = this.tank.y + this.tank.height / 4;

    const distance = Math.sqrt(
      Math.pow(tankCenterX - dropX, 2) + Math.pow(tankCenterY - dropY, 2)
    );

    if (distance <= combinedRadius) {
      this.newDrop.isActive = false;
      this.newDrop.x = 3300;
      stateManager.setDrop({ type, value });
    }
  }

  i = 0;
  drawLevel(ctx) {
    console.log(this.newDrop);

    this.i++;
    this.dropSelector(this.i, ctx);
    this.level.draw(ctx);
  }
}

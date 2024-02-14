import { firstLevelBlocks } from "../Obstacles/ObstaclesModel.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";
import Enemy from "../Enemy/Enemy.js";
import LevelBuilder from "../Levels/Level_Builder.js";
import stateManager from "../Store/StateManager.js";
import Drops from "../Drops/Drops.js";
import { survivalDrops as drops } from "../Drops/SurvivalLevelDrops.js";
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
export default class SurvivalLevel {
  constructor(tank, background, audio, animations) {
    this.tank = tank;
    this.background = background;
    this.audio = audio;
    this.animations = animations;

    stateManager.setEnemySwarm(EnemySwarm);

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

  EndlessSurvior = (id, dmg) => {
    let DeadEnemyCounte = [...this.EnemySwarm];
    DeadEnemyCounte.map((val) => {
      stateManager.setEnemyDestroyCounter();

      if (val.id == id) {
        val.isAlive = dmg;
      }
    });

    let DestroyedTanks = DeadEnemyCounte.filter((val) => val.isAlive);

    stateManager.setEnemyTankCounter(DestroyedTanks);
    let newArr = [...this.EnemySwarm];

    if (DestroyedTanks.length <= 0) {
      let newSwarm = newArr.map((val) => {
        const updatedEnemy = {
          ...val,
          lives: val.lives + 1,
          velocity: val.velocity + 1,
          isAlive: true,
        };

        return updatedEnemy;
      });
      setTimeout(() => {
        stateManager.setMoney(9);
        stateManager.setEnemySwarm(newSwarm);
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
      }, 3000);
    }
  };
  randomIndex = Math.floor(Math.random() * drops.length);
  newDrop = drops[this.randomIndex];
  getPoints() {
    const { x, y, width, height, img, type, value, isActive } = this.newDrop;
    return new Drops(x, y, width, height, img, type, value, isActive);
  }

  points = this.getPoints();
  dropSelector(i, ctx) {
    this.pickUpDrop({ ...this.points });
    if (i === 400) this.randomIndex = Math.floor(Math.random() * drops.length);

    if (i >= 1 && i <= 200) {
      return this.points.draw(ctx);
    } else if (i >= 400) {
      return this.points.draw(ctx);
    } else {
    }
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
      this.newDrop.x = 5000;
      stateManager.setDrop({ type, value: value / 2 });
    }
  }

  i = 0;
  drawLevel(ctx) {
    this.i++;
    this.dropSelector(this.i, ctx);
    this.level.draw(ctx);
  }
}

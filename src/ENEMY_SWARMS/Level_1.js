import { firstLevelBlocks } from "../Obstacles/ObstaclesModel.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";
import Enemy from "../Enemy/Enemy.js";
import LevelBuilder from "../Levels/Level_Builder.js";
import stateManager from "../Store/StateManager.js";
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
        this.EndlessSurvior
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
  }

  EndlessSurvior = (id, dmg) => {
    let DeadEnemyCounte = [...this.EnemySwarm];
    DeadEnemyCounte.map((val) => {
      if (val.id == id) {
        val.isAlive = dmg;
      }
    });
    let DestroyedTanks = DeadEnemyCounte.filter((val) => val.isAlive);

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

      stateManager.setEnemySwarm(newSwarm);
      this.EnemySwarm = stateManager.getSharedState().enemySwarm;
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
          this.EndlessSurvior
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
  };

  drawLevel(ctx) {
    this.level.draw(ctx);
  }
}

const PngUrl = "assets/PNG/";
const EffectUrl = `${PngUrl}Effects/Sprites/`;
import { firstLevelBlocks } from "../Obstacles/ObstaclesModel.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";
import Enemy from "../Enemy/Enemy.js";
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
export const EnemySwarm = [
  {
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
  },
  {
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
  },
  {
    x: 300,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("B", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 3,
    obstacles: firstLevelBlocks,
    lives: 1,
    demage: 1,
  },
  {
    x: 900,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("A", "1"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 3,
    obstacles: firstLevelBlocks,
    lives: 1,
    demage: 1,
  },
  {
    x: 850,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,
    hullSrc: Hull("C", "2"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 4,
    demage: 1,
  },
  {
    x: 700,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("A", "3"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 2,
    demage: 1,
  },
  {
    x: 650,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("C", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 2,
    demage: 1,
  },
  {
    x: 650,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("C", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 2,
    demage: 1,
  },
  {
    x: 650,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("C", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 2,
    demage: 1,
  },
  {
    x: 650,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("C", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 1,
    obstacles: firstLevelBlocks,
    lives: 2,
    demage: 1,
  },
  {
    x: 650,
    y: 0,
    tankWidth: 80,
    tankHeight: 80,

    hullSrc: Hull("C", "6"),
    tracksSrc: Tracks,
    weaponSrc: Weapone("B", "2"),
    Screenwidth: Screenwidth,
    Screenheight: Screenheight,
    velocity: 3,
    obstacles: firstLevelBlocks,
    lives: 1,
    demage: 1,
  
  },
];

export const enemyTankInstances = EnemySwarm.map((enemyTank) => {
  const {
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
    demage
  );
});

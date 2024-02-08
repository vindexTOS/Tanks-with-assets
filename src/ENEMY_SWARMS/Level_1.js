const PngUrl = "assets/PNG/";
const EffectUrl = `${PngUrl}Effects/Sprites/`;
import { firstLevelBlocks } from "../Obstacles/ObstaclesModel.js";
import { Screenwidth, Screenheight } from "../Globals/GLOBAL.js";

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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
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
    velocity: 5,
    obstacles: firstLevelBlocks,
  },
];
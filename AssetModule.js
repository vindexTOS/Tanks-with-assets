const PngUrl = "assets/PNG/";
const EffectUrl = `${PngUrl}Effects/Sprites/`;
export const PlayerTank = {
  hull: `${PngUrl}Hulls_Color_A/Hull_01.png`,
  tracks: [`${PngUrl}Tracks/Track_1_A.png`, `${PngUrl}Tracks/Track_2_A.png`],
  weapone: `${PngUrl}Weapon_Color_D/Gun_08.png`,
};

export const EnemyTank = (color, hull, weapon) => {
  return {
    hull: `${PngUrl}Hulls_Color_${color}/Hull_0${hull}.png`,
    tracks: [`${PngUrl}Tracks/Track_1_A.png`, `${PngUrl}Tracks/Track_2_A.png`],
    weapone: `${PngUrl}Weapon_Color_${color}/Gun_0${weapon}.png`,
  };
};

export const AnimationsModlue = {
  turboAnimation: new Array(9)
    .fill("")
    .map((val, i) => `${EffectUrl}Sprite_Effects_Exhaust_02_00${i}.png`),

  fireFlameAnimation: new Array(9)
    .fill("")
    .map((val, i) => `${EffectUrl}Sprite_Fire_Shots_Flame_00${i}.png`),
  hitExplosion: ["A", "B"].map(
    (val) => `${PngUrl}Effects/Explosion_${val}.png`
  ),
  tankExploted: ["A", "B", "C", "D", "E", "F", "G", "H"].map(
    (val) => `${PngUrl}Effects/Explosion_${val}.png`
  ),
};

export const BulletModule = {
  mediumShell: `${PngUrl}Effects/Medium_Shell.png`,
};

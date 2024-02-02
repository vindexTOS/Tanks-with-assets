const PngUrl = "assets/PNG/";
const EffectUrl = `${PngUrl}Effects/Sprites/`;
export const PlayerTank = {
  hull: `${PngUrl}Hulls_Color_C/Hull_02.png`,
  tracks: [`${PngUrl}Tracks/Track_1_A.png`, `${PngUrl}Tracks/Track_2_A.png`],
  weapone: `${PngUrl}Weapon_Color_C/Gun_01.png`,
};

export const AnimationsModlue = {
  turboAnimation: new Array(9)
    .fill("")
    .map((val, i) => `${EffectUrl}Sprite_Effects_Exhaust_02_00${i}.png`),

  fireFlameAnimation: new Array(9)
    .fill("")
    .map((val, i) => `${EffectUrl}Sprite_Fire_Shots_Flame_00${i}.png`),
};

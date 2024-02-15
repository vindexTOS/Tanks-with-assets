let randomItem = [
  { type: "xp", value: 3000, img: "assets/images/XP.png" },
  { type: "life", value: 1, img: "assets/images/life.png" },
];
let randomIndex = Math.floor(Math.random() * randomItem.length);
const { type, value, img } = randomItem[randomIndex];

const random = (arr) => {
  return Math.floor(Math.random() * arr);
};
export var dropPossitionsAndTimes = [
  200, 800, 170, 20, 50, 100, 125, 150, 200, 350, 400, 450, 500, 550, 600, 650,
  700,
];
export var dropTimeIntervalTime = [
  { start: 10, end: 200 },
  { start: 200, end: 400 },
  { start: 400, end: 800 },
  { start: 700, end: 1000 },
];

export var survivalDrops = [
  {
    y: dropPossitionsAndTimes[random(dropPossitionsAndTimes.length)],
    x: dropPossitionsAndTimes[random(dropPossitionsAndTimes.length)],
    width: 40,
    height: 40,
    img: img,
    type: type,
    value: value,
    isActive: true,
  },
];

import { AnimationsModlue } from "./AssetModule.js";
import stateManager from "../Store/StateManager.js";
export default class Animations {
  constructor() {
    this.width = 550;
    this.height = 510;
    this.turbo = AnimationsModlue.turboAnimation;
    this.Turbo = new Image();
    this.Turbo.src = this.turbo[0];
    this.lifes = stateManager.getSharedState().tankLives;
    this.hitExp = AnimationsModlue.hitExplosion;
    this.hit = new Image();
    this.hit.src = AnimationsModlue.hitExplosion[0];
    this.explotion = new Image();
    this.explotion.src = AnimationsModlue.tankExploted[0];
    this.currentFrame = 0;
    this.explodedFrames = AnimationsModlue.tankExploted.map(this.loadImage);
  }

  loadImage(path) {
    const img = new Image();
    img.src = path;
    return img;
  }

  drawLifeHearts(ctx) {
    new Array(this.lifes).fill("assets/images/life.png").map((val, i) => {
      let image = new Image();
      image.src = val;

      let xCoordinate = this.width + 1000 / 2 + i * 50;

      ctx.drawImage(image, xCoordinate, -this.height / 600, 50, 50);
      this.lifes = stateManager.getSharedState().tankLives;
    });
  }

  tankExplotion(ctx) {
    ctx.save();

    ctx.drawImage(
      this.explodedFrames[this.currentFrame],
      -this.width / 4,
      -this.height / 4,
      this.width - 300,
      this.height - 300
    );

    this.currentFrame = (this.currentFrame + 1) % this.explodedFrames.length;

    ctx.restore();
  }
  explosionAnimation(ctx) {
    ctx.save();

    ctx.translate(10, 0);
    this.hit.src = AnimationsModlue.hitExplosion[Math.floor(Math.random() * 2)];
    let randomNum = Math.floor(Math.random() * 4);
    let randomHitY = [6, 6, 8, 10];
    let randomHitX = [6, 8, 10, 10];
    ctx.drawImage(
      this.hit,
      -this.width / randomHitX[randomNum],
      -this.height / randomHitY[randomNum],
      144,
      144
    );
    ctx.restore();
  }

  gasAnimation(ctx) {
    ctx.save();
    this.Turbo.src = this.turbo[Math.floor(Math.random() * this.turbo.length)];

    ctx.drawImage(
      this.Turbo,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    // ctx.drawImage()
    ctx.restore();
  }
}

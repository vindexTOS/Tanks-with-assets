import { AnimationsModlue } from "./AssetModule.js";

export default class Animations {
  constructor() {
    this.width = 550;
    this.height = 510;
    this.turbo = AnimationsModlue.turboAnimation;
    this.Turbo = new Image();
    this.Turbo.src = this.turbo[0];
  }

  gasAnimation(ctx) {
    console.log(this.Turbo);
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

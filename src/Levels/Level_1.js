import Enemy from "../Enemy/Enemy.js";
import Block from "../Obstacles/Block.js";

export default class LevelOne {
  constructor(
    background,
    EnemySwarm,
    tank,
    audio,
    width,
    height,
    animations,
    firstLevelBlocks
  ) {
    (this.background = background),
      (this.EnemySwarm = EnemySwarm),
      (this.tank = tank),
      (this.audio = audio),
      (this.width = width),
      (this.height = height),
      (this.animations = animations);
    this.firstLevelBlocks = firstLevelBlocks;
  }

  draw(ctx) {
    this.EnemySwarm.forEach((enemy) => {
      enemy.enemyBullets.forEach((bullet, index) => {
        bullet.move();
        bullet.draw(ctx);
        enemy.removeBullet(bullet.x, bullet.y, index);
        this.tank.getHit(bullet.x, bullet.y, index);
      });

      this.tank.bullets.forEach((bullet, index) => {
        bullet.move();
        bullet.draw(ctx);
        bullet.removeBullet(bullet.x, bullet.y, index);
        enemy.getHit(bullet.x, bullet.y, index);
      });
      enemy.drawTank(ctx);
    });

    this.firstLevelBlocks.map((block) => {
      const { x, y, width, height, color } = block;
      let newblock = new Block(x, y, width, height, color);
      newblock.draw(ctx);
    });
  }
}

import Enemy from "../Enemy/Enemy.js";
import Block from "../Obstacles/Block.js";

export default class LevelOne {
  constructor(
    player,
    background,
    EnemySwarm,
    tank,
    audio,
    width,
    height,
    animations,
    ObstacleBlocks
  ) {
    (this.player = player),
      (this.background = background),
      (this.EnemySwarm = EnemySwarm),
      (this.tank = tank),
      (this.audio = audio),
      (this.width = width),
      (this.height = height),
      (this.animations = animations);
    this.ObstacleBlocks = ObstacleBlocks;
  }

  draw(ctx) {
    this.player.draw(ctx);
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

    // Render the blocks after updating bullets and tank actions
    this.ObstacleBlocks.forEach((block) => {
      const { x, y, width, height, color } = block;
      let newblock = new Block(x, y, width, height, color);
      newblock.draw(ctx);
    });
  }
}

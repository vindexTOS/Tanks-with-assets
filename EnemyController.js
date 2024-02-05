export default class EnemyController {
  constructor(enemyTank) {
    this.enemyTank = enemyTank;
  }

  draw(ctx) {
    this.enemyTank.draw(ctx);
  }
}

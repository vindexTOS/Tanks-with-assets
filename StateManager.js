class StateManager {
  constructor() {
    if (!StateManager.instance) {
      this.sharedState = {
        bullets: [],
        enemyBullets: [],
        tankLives: 3,
      };
      StateManager.instance = this;
    }
    return StateManager.instance;
  }
  removeLife() {
    this.sharedState.tankLives--;
  }

  addLife() {
    this.sharedState.tankLives++;
  }

  addBullet(bullet) {
    this.sharedState.bullets.push(bullet);
  }

  removeBullet(index) {
    this.sharedState.bullets.splice(index, 1);
  }

  addEnemyBullets(bullet) {
    this.sharedState.enemyBullets.push(bullet);
  }
  removeEnemyBullet(index) {
    this.sharedState.enemyBullets.splice(index, 1);
  }
  getSharedState() {
    return this.sharedState;
  }
}

// Usage
const stateManager = new StateManager();
export default stateManager;

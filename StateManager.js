class StateManager {
  constructor() {
    if (!StateManager.instance) {
      this.sharedState = {
        bullets: [],
      };
      StateManager.instance = this;
    }
    return StateManager.instance;
  }

  addBullet(bullet) {
    this.sharedState.bullets.push(bullet);
  }

  removeBullet(index) {
    this.sharedState.bullets.splice(index, 1);
  }

  getSharedState() {
    return this.sharedState;
  }
}

// Usage
const stateManager = new StateManager();
export default stateManager;

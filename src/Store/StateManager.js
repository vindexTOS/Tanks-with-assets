class StateManager {
  constructor() {
    if (!StateManager.instance) {
      this.sharedState = {
        drop: {},
        start: false,
        openStore: false,
        bullets: [],
        enemyBullets: [],
        tankLives: 3,
        enemySwarm: [],
        timeInBetweenLevels: 3000,
        enemyCount: 0,
        destroyedEnemies: 0,
        survivalLevel: 1,
        playerPoints: 0,
        isRoundOver: true,
        isRoundBtnShow: false,
      };
      StateManager.instance = this;
    }
    return StateManager.instance;
  }

  //  getshared state
  getSharedState() {
    return this.sharedState;
  }
  //   menu start stops

  Start() {
    this.sharedState.start = !this.sharedState.start;
  }
  setStart(bool) {
    this.sharedState.start = bool;
  }
  OpenStore() {
    this.sharedState.openStore = !this.sharedState.openStore;
  }
  // store
  setMoney(money) {
    this.sharedState.playerPoints += money;
  }
  setDrop(drop) {
    this.sharedState.drop = drop;
    if (drop.type == "xp") {
      this.sharedState.playerPoints += drop.value;
    }
  }
  // life
  removeLife() {
    this.sharedState.tankLives--;
  }

  addLife() {
    this.sharedState.tankLives++;
  }
  // bullets
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

  // enemy
  setEnemySwarm(newSwarm) {
    this.sharedState.enemySwarm = newSwarm;
  }
  // enemy destory counter
  setEnemyTankCounter(arr) {
    this.sharedState.enemyCount = arr.length;
  }
  setEnemyDestroyCounter( ) {
    this.sharedState.destroyedEnemies++;
  }
  // surival
  setSurvivalLevel() {
    this.sharedState.survivalLevel += 1;
  }
  setIsRoundOver(bool) {
    this.sharedState.isRoundOver = bool;
  }
  setIsRoundBtnShow(bool) {
    this.sharedState.isRoundBtnShow = bool;
  }
}

// Usage
const stateManager = new StateManager();
export default stateManager;

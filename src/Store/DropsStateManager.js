class StateManager {
  constructor() {
    if (!StateManager.instance) {
      this.sharedState = { drop: {} };
      StateManager.instance = this;
    }
    return StateManager.instance;
  }

  //  getshared state
  getSharedState() {
    return this.sharedState;
  }
}

// Usage
const dropStateManager = new StateManager();
export default dropStateManager;

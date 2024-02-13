// import stateManager from "./Store/StateManager.js";

// // menu
// //  store
// let store = document.getElementById("store");
// store.style.display = "none";

// let openStore = document.getElementById("storeOpen");

// openStore.addEventListener("click", () => {
//   store.style.display = "flex";
// });

// // start
// let stats = document.getElementById("stats");
// stats.style.display = "flex";
// let menu = document.getElementById("menu");
// let start = stateManager.getSharedState().start;
// const startBtn = document.getElementById("start");
// startBtn.addEventListener("click", () => {
//   stateManager.Start();

//   start = stateManager.getSharedState().start;

//   requestAnimationFrame(gameLoop);
//   menu.style.display = "none";
//   pause.style.display = "flex";
//   canvas.style.display = "flex";
//   stats.style.display = "flex";
// });

// // pause
// let pause = document.getElementById("pause");
// pause.style.display = "none";
// pause.addEventListener("click", () => {
//   stateManager.Start();
//   start = stateManager.getSharedState().start;
//   requestAnimationFrame(gameLoop);

//   menu.style.display = "none";
//   canvas.style.display = "flex";
//   stats.style.display = "flex";
// });
// //

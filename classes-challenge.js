import { Player, TennisPlayer } from "./player.js";

let p1 = new Player("Messi", "Argentina");

console.log(p1);
console.log(p1.metaData);

let p2 = new TennisPlayer("Rafael Nadal", "Argentina", 34);

console.log(p2);
console.log(p2.metaData);
// For add-ons for the maze generator.
// Currenty being used for testing enemy AI.
var bX;
var bY = ;
var solidity = 0;
var phase = "none";

if (bossFight == true) {
 if (phase = "none") {
  phase = "spawn"; 
 }
 room = 100;
 if (phase == "spawn") {
  solidity += 0.02;
 }
 ctx.fillStyle = "rgba(255, 30, 30, " + solidity + ")";
 ctx.fillRect(350, 100, 100, 75);
}

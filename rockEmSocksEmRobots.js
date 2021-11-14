// https://www.codewars.com/kata/566b490c8b164e03f8000002/

// My Solution
const defineRobotsByTurn = (robot1, robot2) => 
  robot2.speed > robot1.speed ? [robot2, robot1] : [robot1, robot2];

const fight = (robot1, robot2, tactics) => {
  const [firstRobot, secondRobot] = defineRobotsByTurn(robot1, robot2);
  let resultMessage = null;

  firstRobot.currentTactic = 0;
  secondRobot.currentTactic = 0;
  
  while (!resultMessage) {

    if (firstRobot.tactics[firstRobot.currentTactic]) {
      secondRobot.health = secondRobot.health - tactics[firstRobot.tactics[firstRobot.currentTactic]];
      firstRobot.currentTactic++;
    }
    
    if (secondRobot.health <= 0) {
      resultMessage = `${firstRobot.name} has won the fight.`;
      break;
    }

    if (secondRobot.tactics[secondRobot.currentTactic]) {
      firstRobot.health = firstRobot.health - tactics[secondRobot.tactics[secondRobot.currentTactic]];
      secondRobot.currentTactic++;
    }
    
    if (firstRobot.health <= 0) {
      resultMessage = `${secondRobot.name} has won the fight.`;;
      break;
    }

    if (!firstRobot.tactics[firstRobot.currentTactic] && !secondRobot.tactics[secondRobot.currentTactic]) {

      if (firstRobot.health > secondRobot.health) {
        resultMessage = `${firstRobot.name} has won the fight.`;
        break;
      }
      
      if (secondRobot.health > firstRobot.health) {
        resultMessage = `${secondRobot.name} has won the fight.`;
        break;
      }

      resultMessage = 'The fight was a draw.';
    }
  }

  return resultMessage;
}

// Best solution
function fight(r1, r2, tactic) {
  if (r1.speed < r2.speed) [r1, r2] = [r2, r1];  
  while(r1.tactics.length || r2.tactics.length) {
    if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
    if (r2.health <= 0) break;
    if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
    if (r2.health <= 0) break;
  }
  if (r1.health == r2.health) return "The fight was a draw.";
  return `${(r1.health>r2.health)?r1.name:r2.name} has won the fight.`;
}

const robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["missile"]
 };

 const robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile"]
 };

 const tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 };
 
console.log(fight(robot1, robot2, tactics));
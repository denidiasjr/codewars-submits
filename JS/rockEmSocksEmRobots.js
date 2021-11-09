// https://www.codewars.com/kata/566b490c8b164e03f8000002/

const fight = (robot1, robot2, tactics) => {

  const normalizeTactics = () => {
    if (robot1.tactics.length === robot2.tactics.length) {
      return;
    }

    if (robot1.tactics.length > robot2.tactics.length) {
      return;
    }
  }
}

const robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missile"]
 };

 const robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missile", "missile", "missile", "missile"]
 };

 const tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 };
 
console.log(fight(robot1, robot2, tactics));
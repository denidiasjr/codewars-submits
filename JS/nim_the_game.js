// https://www.codewars.com/kata/nim-the-game/

/*

MY SOLUTION

*/
function calculateNimSum(state) {
  return state.reduce((acum, value) => acum ^ value, 0);
}

function chooseMove(state) {
  const computerMove = state.reduce((acum, pile, index) => {
    if (acum) {
      return acum;
    }

    let pileCheck = pile;
    let stateCheck = [...state];
    let nimSumCheck = -1;

    while (pileCheck > 0) {
      pileCheck--;
      stateCheck[index] = pileCheck;

      nimSumCheck = calculateNimSum(stateCheck);

      if (nimSumCheck === 0) {
        return [index, pile - pileCheck];
      }
    }
  }, null);

  return computerMove;
}

/*

BEST SOLUTION

*/
function chooseMove(state) {
  let x = state.reduce((acc, s) => acc^s, 0);
  for (let [i, e] of state.entries()) {
    if ((e ^ x) < e) {
     return [i, e - (e ^ x)];
    }
  }
}

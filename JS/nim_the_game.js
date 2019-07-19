// https://www.codewars.com/kata/nim-the-game/

function calculateNimSum(state) {
  return state.reduce((acum, value) => acum ^ value, 0);
}

function chooseMove(state) {
  const nimSum = calculateNimSum(state);

  // if nimSum !== 0
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

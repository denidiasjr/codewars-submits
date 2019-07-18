// https://www.codewars.com/kata/nim-the-game/

function chooseMove(state) {
 
    const nimSum = state.reduce((acum, value) => acum ^ value, 0);
    return nimSum;

    // if nimSum !== 0
}

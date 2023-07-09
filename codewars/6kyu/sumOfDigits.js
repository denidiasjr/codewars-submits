// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
   
    // Convert n into string
    var n = ""+n;

    // Check if all sum has happened
    if (n.length == 1){
        return parseInt(n);
    }

    var sum = 0;
    n.split('').map((x,i) => sum += parseInt(x));
    return digitalRoot(sum);
}

console.log(digitalRoot(493193));
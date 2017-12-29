
// My solution
function digital_root(n){
   
    // Convert n into string
    var n = ""+n;

    // Check if all sum has happened
    if (n.length == 1){
        return parseInt(n);
    }

    var sum = 0;
    n.split('').map((x,i) => sum += parseInt(x));
    return digital_root(sum);
}

// Best solution
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

console.log(digital_root(493193));
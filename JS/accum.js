
// Minha solucao
function accum(s){

    // Verifica se eh String
    if (typeof s != 'string'){
        s = ""+s;
    }

    // Apresenta string
    var result = "";

    for (var i = 0; i < s.length; i++){
        
        result += s[i].toUpperCase();

        for (var j = 0; j < i; j++){
            result += s[i].toLowerCase();
        }

        if (i != (s.length -1)){
            result += "-";
        }
    }

    return result;
}

// Melhor solucao
function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

// Segunda melhor solucao
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum('RqaEzty'));
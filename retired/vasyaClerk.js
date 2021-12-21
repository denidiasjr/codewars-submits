// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

function tickets(peopleInLine) {

    // 25, 50 and 100 Bills in wallet
    var wallet25 = 0;
    var wallet50 = 0;
    var wallet100 = 0;

    for (var i = 0; i < peopleInLine.length; i++){

        console.log(peopleInLine[i]);
        console.log("25: "+wallet25+", 50: "+wallet50+", 100: "+wallet100);
        
        if (peopleInLine[i] == 25){
            wallet25++;
            continue;
        }

        if (peopleInLine[i] == 50){
            
            if (wallet25 == 0){
                return "NO";
            }
            wallet25--;
            wallet50++;
            continue;
        }

        if (peopleInLine[i] == 100){
            
            if ((wallet25 >= 1) && (wallet50 >= 1)){
                wallet100++;
                wallet25--;
                wallet50--;
            } else if (wallet25 >= 3) {
                wallet25 -= 3;
                wallet100++;
            } else {
                return "NO";
            }           
        }
    }

    return "YES";
}

console.log(tickets([25,25,50,100,25,25,25,100,25,25,25,100,25,25,25,100 ]));
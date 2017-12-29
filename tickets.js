
// My solution
function tickets(peopleInLine){

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

// Best Solution
function Clerk(name) {
    this.name = name;
    
    this.money = {
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;
  
      switch (element) {
        case 25:
          return true;
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
  }

console.log(tickets([25,25,50,100,25,25,25,100,25,25,25,100,25,25,25,100 ]));
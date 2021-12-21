// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

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

console.log(accum('RqaEzty'));
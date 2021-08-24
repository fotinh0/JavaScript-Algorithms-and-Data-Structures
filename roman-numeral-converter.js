function convertToRoman(num) {
let romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var string = '';

  for (var i of Object.keys(romanNumeral)) {
    var q = Math.floor(num / romanNumeral[i]);
    num -= q * romanNumeral[i];
    string += i.repeat(q);

    if (num===0){
      return string}
  }
}

convertToRoman(36);

var numberIntoWords = function(number) {
  var singleDigits = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  var tensDigits = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"};
  var twentiesToNinties = {0: "", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};
  var hundreds = {0: "", 1: "one hundred", 2: "two hundred", 3: "three hundred", 4: "four hundred", 5: "five hundred", 6: "six hundred", 7: "seven hundred", 8: "eight hundred", 9: "nine hundred"};
  var splitNumber = number.toString().split('');


  if (splitNumber.length === 1) {
    return singleDigits[number];
  } else if (splitNumber.length === 2 && number < 20) {
    return tensDigits[number];
  } else if (splitNumber.length === 2 && number >= 20 && number < 100) {
    return twentiesToNinties[splitNumber[0]] + " " + singleDigits[number.toString().slice(1)];
  } else if (splitNumber.length % 3 === 0 && number >= 100) {
    return hundreds[splitNumber[0]] + " " + twentiesToNinties[number.toString().slice(1, 2)] + " " + singleDigits[number.toString().slice(2)];
  } else if (splitNumber.length === 4 && splitNumber.length) {
    return singleDigits[splitNumber[0]] + " thousand " + hundreds[splitNumber[1]] + " " + twentiesToNinties[number.toString().slice(2, 3)] + " " + singleDigits[number.toString().slice(3)];
  } else if (splitNumber.length === 5) {
    return tensDigits[splitNumber.join('').slice(0, 2)] + " thousand " + hundreds[splitNumber[2]] + " " + twentiesToNinties[number.toString().slice(3, 4)] + " " + singleDigits[number.toString().slice(4)];
  }
  

  
  for (var i = 0; i < splitNumber.length; i++) {
    splitNumber 
  };

};

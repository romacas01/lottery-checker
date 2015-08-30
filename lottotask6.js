/*
 *Javascript TMA
 *Author: Rodrigo Magalhaes de Castro
 */

//takes two parameters that are returned by the getCustomerNumber and getWinningNumbers functions
function checkNumbers(customerNum, arrayNum) {
  var match = 0;
  for ( i = 0; i < customerNum.length; i++) {
    for (j = 0; j < arrayNum.length; j++)
      if (customerNum[i] == arrayNum[j]) {
	    //counts how many matches are found
        match += 1;
		break;
	  }
    }
    return match;
}

function displayResult(winningArr, custNum) {
  var match = checkNumbers(customerNumbers, winningNumbers);
  if (match > 0) {
    alert("This Week's Winning Numbers are: \n \n" + winningArr + "\n \n" + "The customer number is: " + "\n \n" + custNum + "\n \n" + 
	      "Numbers matched \n \n " + match);
  } else{
	alert("This Week's Winning Numbers are: \n \n" + winningArr + "\n \n" + "The customer number is: " + "\n \n" + ccustNum + "\n \n"+
	      "Numbers matched \n \n" + match);
  }
}

function init() {
  displayResult(winningNumbers, customerNumbers);
}

customerNumbers = [];
customerNumbers.push(12, 17, 24, 37, 38, 43);

winningNumbers = [];
winningNumbers.push(12, 17, 24, 37, 38, 43);

window.onload = init();   
   
   
			 
			
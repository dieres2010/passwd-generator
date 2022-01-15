
// Create string variable with corresponding set of characters

var randomSpec = '!"#$%&'+"'"+'()*+,-./:;<=>?@[\]^_`{|}~';
var randomNumb = '0123456789'; 
var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLower = 'abcdefghijklmnopqrstuvwxyz';

// Ask for the number of character of the password

var askLenght = function() {

  var passwdLenght = null;

  // ask the player for the lenght of the password
  var lenghtPasswd = window.prompt("Choose the lenght of the password, Must be a value between 8 to 128");

  // if not lenght was specified (cancel buttom was pressed)
  if (lenghtPasswd == null) {
    window.alert("BYE");
    lenghtPasswd = null;
    return;
  }  else { 
  
    // get the lenght of the number
    passwdLenght = lenghtPasswd.length;
      // convert answer from prompt to an actual number
    lenghtPasswd = parseInt(lenghtPasswd);
      
  };

  // If number not valid (mix of characters) or with diferent lenght after converted to integer (with decimals) or empty
  if (isNaN(lenghtPasswd) || passwdLenght != lenghtPasswd.toString().length || lenghtPasswd === null) {
      window.alert("You did not pick a valid number. Try again.");
      lenghtPasswd = null;
      // recall the function itself
      askLenght();

    // number not between 8 and 128
  } else if (lenghtPasswd < 8  || lenghtPasswd > 128) {
    window.alert("You did not entered a valid range number. Try again.");
    lenghtPasswd = null;
    // recall the function itself
    askLenght();
  }
  return lenghtPasswd;
};

// main function
var generatePassword = function() {

  var passwordString = '';
  var passwdLenght = askLenght();
  console.log(passwdLenght);

  // if password lenght not null (a lenght was specified)
  if (passwdLenght != null) {

    // confirm lowercase letters in password
    var confirmLower = window.confirm("DO you want to use Lowercase Letters in the password?");
    // confirm uppercase Letters in password
    var confirmUpper = window.confirm("DO you want to use Uppercase Letters in the password?");
    // confirm special characters in password
    var confirmSpecial = window.confirm("DO you want to use Special Caharacters in the password?");
    // confirm special numbers in password
    var confirmNumber = window.confirm("DO you want to use Numbers in the password?");

    // if at least one criteria was choosen
    if (confirmLower || confirmUpper || confirmSpecial || confirmNumber) {

      // if yes (true) adds the set of Lowercase Letters to the password string
      if (confirmLower) {
        passwordString = passwordString + randomLower;
      }
      // if yes (true) adds the set of Uppercase Letters to the password string
      if (confirmUpper) {
        passwordString = passwordString + randomUpper;
      }
      // if yes (true) adss the set of numbers to the password string
      if (confirmNumber) {
        passwordString = passwordString + randomNumb;
      }
      // if yes (true) adds the set of special characters to the password string
      if (confirmSpecial) {
        passwordString = passwordString + randomSpec;
      }
      var passwordString = getRandomSpecial(passwdLenght, passwordString);

      return passwordString;
    } else {
      window.alert ("must choose at least 1 criteria for the password");
      generatePassword();
    }
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;

}

// obtain a ramdom list of characters from a given string and with a given lenght
function getRandomSpecial(length, randomChars) {
 
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      
  }
  console.log(result);
  return result;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

var randomSpec = '!"#$%&'+"'"+'()*+,-./:;<=>?@[\]^_`{|}~';
var randomNumb = '0123456789'; 
var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLower = 'abcdefghijklmnopqrstuvwxyz';
var randomAll = randomLower + randomUpper + randomNumb + randomSpec;

// Ask for the number of character of the password

var askLenght = function() {

  var passwdLenght = null;

  // ask the player for the lenght of the password
  var lenghtPasswd = window.prompt("Choose the lenght of the password, Must be a value between 8 to 128");

  if (lenghtPasswd == null) {
    window.alert("BYE");
    lenghtPasswd = null;
    return;
  }  else { 
  
    passwdLenght = lenghtPasswd.length;
      // convert answer from prompt to an actual number
    lenghtPasswd = parseInt(lenghtPasswd);
      
  };

  // use switch case to carry out action

  if (isNaN(lenghtPasswd) || passwdLenght != lenghtPasswd.toString().length || lenghtPasswd === null) {
      window.alert("You did not pick a valid number. Try again.");
      lenghtPasswd = null;
      askLenght();
  } else if (lenghtPasswd < 8  || lenghtPasswd > 128) {
    window.alert("You did not entered a valid range number. Try again.");
    lenghtPasswd = null;
    askLenght();
  }
  return lenghtPasswd;
};

var generatePassword = function() {

  var passwordString = '';
  var passwdLenght = askLenght();
  console.log(passwdLenght);

  if (passwdLenght != null) {

    // confirm lowercase letters in password
    var confirmLower = window.confirm("DO you want to use Lowercase Letters in the password?");
    // confirm uppercase Letters in password
    var confirmUpper = window.confirm("DO you want to use Uppercase Letters in the password?");
    // confirm special characters in password
    var confirmSpecial = window.confirm("DO you want to use Special Caharacters in the password?");
    // confirm special numbers in password
    var confirmNumber = window.confirm("DO you want to use Numbers in the password?");

    if (confirmLower || confirmUpper || confirmSpecial || confirmNumber) {

      // if yes (true) search for Lowercase Letters to include in the password string
      if (confirmLower) {
        passwordString = passwordString + randomLower;
        console.log(passwordString);
      }
      // if yes (true) search for Uppercase Letters to include in the password string
      if (confirmUpper) {
        passwordString = passwordString + randomUpper;
        console.log(passwordString);
      }
      // if yes (true) search for a random number to include in the password string
      if (confirmNumber) {
        passwordString = passwordString + randomNumb;
        console.log(passwordString);
      }
      // if yes (true) search for a random special character to include in the password string
      if (confirmSpecial) {
        passwordString = passwordString + randomSpec;
        console.log(passwordString);
      }
      var passwordString = getRandomSpecial(passwdLenght, passwordString);

      return passwordString;
      console.log = passwordString;
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

function getRandomSpecial(length, randomChars) {
 
  
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      
  }
  console.log(result);
  return result;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

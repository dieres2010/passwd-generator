
// Create string variable with corresponding set of characters

var randomSpec = '!"#$%&'+"'"+'()*+,-./:;<=>?@[\]^_`{|}~';
var randomNumb = '0123456789'; 
var randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLower = 'abcdefghijklmnopqrstuvwxyz';
var typesSearch = '';

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

  typesSearch = '';
  var passwdLenght = askLenght();

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

      // if yes (true) adds the type Lowercase Letters to the list of types to search
      if (confirmLower) {
        typesSearch = typesSearch + "l";
      }
      // if yes (true) adds the type Uppercase Letters to the list of types to search
      if (confirmUpper) {
        typesSearch = typesSearch + "u";
      }
      // if yes (true) adss the type numbers to the list of types to search
      if (confirmNumber) {
        typesSearch = typesSearch + "n";
      }
      // if yes (true) adds the type special characters to the list of types to search
      if (confirmSpecial) {
        typesSearch = typesSearch + "s";
      }

      var passwordString = getRandomSpecial(passwdLenght);

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
  passwordText.value = password;

}

// obtain a ramdom list of characters from a given string and with a given lenght
function getRandomSpecial(strLength) {
 
  var result = '';
  // lenght of type of characters string
  var typesLenght = typesSearch.length;
  // character type to search for
  var resultType = '';

  for ( var i = 0; i < strLength; i++ ) {
      
      // if types lenght > 1, then are more than 1 tipe of characters to search for
      if (typesSearch.length > 1) {

        // Choose a ramdom type to search for
        resultType = typesSearch.charAt(Math.floor(Math.random() * typesSearch.length));
      } else {
        resultType = typesSearch;
      };
      switch (resultType) {
        case 'l':
          result += randomLower.charAt(Math.floor(Math.random() * randomLower.length));
          break;
        case 'u':
          result += randomUpper.charAt(Math.floor(Math.random() * randomUpper.length));      
          break;
        case 'n':
          result += randomNumb.charAt(Math.floor(Math.random() * randomNumb.length));
          break;
        case 's':
          result += randomSpec.charAt(Math.floor(Math.random() * randomSpec.length));      
          break;
      }
  }
  return result;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

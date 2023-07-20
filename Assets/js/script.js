// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Need to give users something visual after the alerts for incorrect inputs, so we'll run an if statement to catch the returns outside scope
  if (password === undefined) {
    passwordText.value = "There was an error generating your password. Please try again."
  } else if (password == 0) {
    passwordText.value = "You don't want a password? :("
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generator function
function generatePassword() {

  let lengthPrompt = prompt("Please select a password length between 8 - 128.", "20");

  //need to turn the string from the prompt into a number
  let length = Number(lengthPrompt);

  //time to filter out min/max/Nan
  //learned that NaN is always falsy, so need to use this function for NaN filter isNaN()
  if (isNaN(length)) {
    alert("Please use only numbers!");
    return;
  } else if (length == 0) {
    alert("You need to set a password length!")
    return 0;
  } else if (length < 8) {
    alert("Minimum length is 8.");
    return;
  } else if (length > 128) {
    alert("Maximum length is 128.")
    return;
  }  

  //we'll set up the string we'll use to create our password
  let generatedString = ''

  //some confirm prompts to concatanate to our generatedPassword using true/false
  let lowerCaseConfirm = confirm("Would you like your password to include lowercase letters?")
    if (lowerCaseConfirm == true) {
      generatedString += 'abcdefghijklmnpqrstuvwxyz';
    }

  let upperCaseConfirm = confirm("Would you like your password to include uppercase letters?")
    if (upperCaseConfirm == true) {
      generatedString += 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
    }

  let numberConfirm = confirm("Would you like your password to include numbers?")
    if (numberConfirm == true) {
      generatedString += '0123456789';
    }

  let symbolsConfirm = confirm("Would you like your password to include symbols?")
    if (symbolsConfirm == true) {
      generatedString += '!#$%&()*+,-./:;<=>?@[]/^_`{|}~';
    }

  //need an if statement to catch anyone who selected no criteria, but selected a valid length
  if (lowerCaseConfirm == false && upperCaseConfirm == false && numberConfirm == false && symbolsConfirm == false) {
    alert ("You must choose at least one criteria, sorry :(");
    return;
  }

  //now we have our dynamic generatedPassword as well as the desired length. time to run a for loop to create the password
  //we'll create a new variable that we can randomize the generatedString into for our final password
  let generatedPassword = ''

  for (let i = 0; i < length; i++) {
    generatedPassword += generatedString[(Math.floor(Math.random() * generatedString.length))];
  }

  return generatedPassword
}

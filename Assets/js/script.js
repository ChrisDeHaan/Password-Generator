// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
    passwordText.value = "There was a mistake in your password length. Please try again."
  } else {
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generator function
function generatePassword() {

  let lengthPrompt = prompt("Please select a password length between 8 - 128.", "20");

  //need to turn the string into a number
  length = Number(lengthPrompt);

  //time to filter out min/max/Nan
  //learned that NaN is always falsy, so need to use this function for NaN filter isNaN()
  if (isNaN(length)) {
    alert("Please use only numbers!");
    return;
  } else if (length < 8) {
    alert("Minimum length is 8.");
    return;
  } else if (length > 128) {
    alert("Maximum length is 128.")
    return;
  }  

  //we'll set up the string we'll use for our final password

  let generatedPassword = ''

  //some confirm prompts to concatanate to our generatedPassword using true/false

  let lowerCaseConfirm = confirm("Would you like your password to include lowercase letters?")
    if (lowerCaseConfirm == true) {
      generatedPassword += 'abcdefghijklmnpqrstuvwxyz';
    }

  let upperCaseConfirm = confirm("Would you like your password to include uppercase letters?")
    if (upperCaseConfirm == true) {
      generatedPassword += 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
    }

  let numberConfirm = confirm("Would you like your password to include numbers?")
    if (numberConfirm == true) {
      generatedPassword += '0123456789';
    }

  let symbolsConfirm = confirm("Would you like your password to include symbols?")
    if (symbolsConfirm == true) {
      generatedPassword += '!#$%&()*+,-./:;<=>?@[]/^_`{|}~';
    }

  //now we have our dynamic generatedPassword as well as the desired length. time to run a for loop to create the password
    console.log (generatedPassword);

}

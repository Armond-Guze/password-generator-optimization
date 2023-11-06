var generateBtn = document.querySelector("#generate");

var passPrompt = prompt("Enter password criteria, between 8-128 characters");
var addLowerCase = confirm("Do you want to add lowercase letters in your password?");
var addUpperCase = confirm("Do you want add uppercase letters in your password?");
var addNumbers = confirm("Do you want to add numbers in your password?");
var addSpecialCharacters = confirm("Do you want to add special characters in your password?");

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+<>?=";

//function that shows an alert if proper credentials are not met
function generatePassword() {
  if (isNaN(passPrompt) || passPrompt < 8 || passPrompt > 128) {
    alert("Your password must be 8-128 characters! You must restart.");
    return "";
  }

  var allCharacters = "";

  if (addLowerCase) {
    allCharacters += lowerCaseLetters;
  }
  if (addUpperCase) {
    allCharacters += upperCaseLetters;
  }
  if (addNumbers) {
    allCharacters += numbers;
  }
  if (addSpecialCharacters) {
    allCharacters += specialCharacters;
  }

  var password = "";
  var length = parseInt(passPrompt);

  //for loop creating password creating random password
  for (let i = 0; i < length; i++) {
    var passwordGen = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(passwordGen);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

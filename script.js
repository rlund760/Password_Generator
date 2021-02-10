// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = parseInt(prompt("Enter Password Length"))
  if (passwordLength < 8 || passwordLength>121){
   alert ("Enter valid length between 8 and 21") 
   return "Enter valid length between 8 and 21"
  }
}
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
  else {
    var yesUpperCase = confirm("Do you like Uppercase letters in the password ?")
    var yesLowerCase = confirm("Do you like Lowercase letters in the password ?")
    var numbers = confirm("Do you like numbers in the password ?")
    var symbols = confirm("Do you like symbols in the password ?")
    if (!yesUpperCase && !yesLowerCase && !numbers && !symbols){
      alert ("Choose at least one option")
      return "Choose at least one option"
    }
  }

}
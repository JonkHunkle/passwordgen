// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //////////////////////////////////////
  var passLen;
  var num;
  var upper;
  var lower;
  var special;
  var passArray = [];
  var password = "";
  /////////////////////////////////////
  passLen = prompt("hello! how long would you like your password?");
  if (passLen < 8 || passLen > 128 || isNaN(passLen)) {
    alert("check the characters!");
    generatePassword();
  } else {
    numConfirm = confirm("would you like numbers?");

    if (numConfirm) {
      //if you want numbers in your password the computer will add the numbers array
      num = ["0", "1", "2", "3", "4,", "5", "6", "7", "8", "9"];
      passArray = passArray.concat(num);
      console.log(passArray);
      //console.log(Math.floor(Math.random(num.length) * 10));
    }
    upperConfirm = confirm("would you like to uppercase letters?");

    if (upperConfirm) {
      upper = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      passArray = passArray.concat(upper);
      console.log(passArray);

      //if you want uppercase letters the computer will add them to the array
    }
    lowerConfirm = confirm("would you like lowercase letters?");

    if (lowerConfirm) {
      lower = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      passArray = passArray.concat(lower);
      //if you want lowercase letters it will be added to the array
      console.log(passArray);
    }
    specialConfirm = confirm("would you like special characters?");

    if (specialConfirm) {
      special = [
        "!",
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
      ];
      passArray = passArray.concat(special);
      //add special chars to arrray
      console.log(passArray);
    }
  }

  if (!specialConfirm && !upperConfirm && !lowerConfirm && !numConfirm) {
    alert("You need at least one of these categories");
    generatePassword();
  } else {
    for (var i = 0; i < passLen; i++) {
      randomNum = Math.floor(Math.random() * passArray.length);
      password += passArray[randomNum];
    }
  }

  //teacher recomends keeping awways to single strings

  //do stuff to password with alerts, prompts and if, else if, and else statements
  //ask for how many numbers
  // if user choice <8, restart with error message 'need at least 8 characters!'
  //ask yes no for each type of character (lower, upper, numeric,special) [try and figure out ascii]
  //if user says no to all
  //restart with error 'must choose at least one'
  //computer generates a random number and use it to INDEX from an array(created above)
  //for num,ber of character that user picked, randomly build password, char by char
  //gen number
  // grab randon char based on number
  //append password via (concatinate [+})

  // password = array as long as passArray.length filled with randomly chosen items

  return password;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

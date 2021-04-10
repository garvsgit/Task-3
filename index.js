function analyse() {
  var string = document.getElementById("stringinput").value;
  var vowels, consonants, digits, spaces, specialCharacters;
  var vowel_list = "aeiouAEIOU";
  var digit_list = "0123456789";
  vowels = consonants = digits = spaces = specialCharacters = 0;
  for (i = 0; i < string.length; i++) {
    if (vowel_list.indexOf(string[i]) !== -1) {
      vowels += 1;
    } else if (string[i] <= "z" && string[i] >= "A") {
      consonants += 1;
    } else if (digit_list.indexOf(string[i]) !== -1) {
      digits += 1;
    } else if (string[i] == " ") {
      spaces += 1;
    } else {
      specialCharacters += 1;
    }
  }
  console.log(consonants)
  document.getElementById("vowels").innerHTML = vowels;
  document.getElementById("consonants").innerHTML = consonants;
  document.getElementById("digits").innerHTML = digits;
  document.getElementById("spaces").innerHTML = spaces;
  document.getElementById("specialCharacters").innerHTML = specialCharacters;
}

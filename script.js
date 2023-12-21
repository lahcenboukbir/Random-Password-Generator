// Selecting elements from the DOM
const input = document.querySelector(".generator-input input");
const refresh = document.querySelector(".generator-input i");
const copy = document.querySelector(".btn-copy");

// Password length
const length = 20;

// Character sets for generating passwords
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;

// Function to generate a random password
function generatePassword() {
  let password = "";

  // Loop to create a password with a mix of characters
  while (password.length < length) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }

  // Display the generated password in the input field
  input.value = password;
}

// Initial password generation
generatePassword();

// Event listener for the refresh icon to generate a new password
refresh.addEventListener("click", () => {
  generatePassword();
  copy.innerHTML = "Copy";
});

// Event listener for the copy button to copy the password to the clipboard
copy.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");
  copy.innerHTML = "Copied!";
});


var generator = require("generate-password");

function generates() {
  password = generator.generate({
    length: 5,
    numbers: true,
  });
  return password;
}
const generate = generates();
console.log(password);

const generate = require('generate-password');

function generatePassword() {
  const password = generate.generate({
    length: 12,
    numbers: true,
    symbols: true,
  });
  console.log('Generated password: ', password);
}

generatePassword();

const palindromes = function (str) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let filteredString = '';
  
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (!isNaN(currentChar) || !punctuation.includes(currentChar)) {
            filteredString += currentChar.toLowerCase(); // Consider case-insensitive comparison for palindromes
        }
    }

    // Check for palindrome
    let reversedString = filteredString.split('').reverse().join('');
    return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

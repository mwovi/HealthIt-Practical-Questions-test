const fs = require('fs');

/**
 * This function reads a file and returns the content as a string.
 * @param {string} filePath - The path to the file.
 * @returns {string} The content of the file.
 */
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

/**
 * This function counts the occurrences of a string in a text.
 * @param {string} text - The text to search in.
 * @param {string} searchString - The string to search for.
 * @returns {number} The number of occurrences.
 */
function countOccurrences(text, searchString) {
    const regex = new RegExp(searchString, 'g');
    return (text.match(regex) || []).length;
}

// Usage
const text = readFile('Question 4/sampleFile.txt');
const occurrences = countOccurrences(text, 'amet');
console.log(occurrences);
const assert = require('assert');
const fs = require('fs');
const { readFile, countOccurrences } = require('./searchString');

describe('searchString.js', () => {
    describe('readFile', () => {
        it('should return the content of the file as a string', () => {
            fs.writeFileSync('test.txt', 'Hello, world!');
            const content = readFile('test.txt');
            assert.strictEqual(content, 'Hello, world!');
            fs.unlinkSync('test.txt');
        });
    });

    describe('countOccurrences', () => {
        it('should return the number of occurrences of a string in a text', () => {
            const text = 'Hello, world! Hello, everyone!';
            const searchString = 'Hello';
            const count = countOccurrences(text, searchString);
            assert.strictEqual(count, 2);
        });
    });
});
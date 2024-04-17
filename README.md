<h1>Question 3:</h1> <br/>
<p><i>Using a framework of your choice, write a program that does basic CRUD operation using a DBMS of your choice while adhering to best coding practices</i></p>

<h3> Solution </h3>

<p align="center">
  <img src="https://logospng.org/download/react/logo-react-256.png" />
  <img src="https://logospng.org/download/node-js/logo-node-js-256.png" />
  <img src="https://logospng.org/download/mysql/mysql-256.png" />
</p>

<h1 align="center">Reactjs Node Mysql CRUD</h1>
<p align="center">A simple CRUD made with Reactjs, Nodejs and Mysql</p>

# Home
![home layout](./Question%203/screenshots/screenshot1.PNG)

# Edit
![edit layout](./Question%203/screenshots/screenshot2.PNG)

# Tools
<ul>
  <li><a href="https://github.com/facebook/react">Reactjs</a></li>
  <li><a href="https://github.com/nodejs/node">Nodejs</a></li>
  <li><a href="https://github.com/topics/mysql">Mysql</a></li>
</ul>

## Install Run
To install and run the 
  1. Frontend - Download the zip file, navigate to the client folder then run the commands below <br>
    `npm install` <br>
    `npm run dev`

  2. Backend - Download the zip file, navigate to the server folder then run the commands below <br>
    `npm install` <br>
    `npm run dev`


<h1>Question 4: </h1>

## Part 1

<p><i>Write a simple , well documented source code that reads from a text file, searches for a specific string and displays the number of occurrences of that string in the text file. <p></i>

<h3> Solution </h3>
# searchString.js

This JavaScript file contains two main functions: `readFile` and `countOccurrences`.

## readFile Function

The `readFile` function takes a file path as an argument and reads the file content synchronously using Node.js's `fs.readFileSync` method. The content of the file is returned as a string.

```javascript
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}
```

## countOccurrences Function

The `countOccurrences` function takes two arguments: a text to search in and a string to search for. It creates a global regular expression with the search string and uses the `match` method to find all occurrences of the search string in the text. The number of matches is returned.

```javascript
function countOccurrences(text, searchString) {
    const regex = new RegExp(searchString, 'g');
    return (text.match(regex) || []).length;
}
```

## Usage

The script reads a text file (`sampleFile.txt`) and counts the number of occurrences of the string 'amet' in the file content.

```javascript
const text = readFile('Question 4/sampleFile.txt');
const occurrences = countOccurrences(text, 'amet');
console.log(occurrences);
```

The result is logged to the console.

## Part 2

<P><i>Write a function that reads any of the following file formats, removes special characters and converts the file to an sql file with headers</i></p>

# writeSql.js

This JavaScript file contains three main functions: `removeSpecialCharacters`, `convertToSql`, and `writeSqlFile`.

## removeSpecialCharacters Function

The `removeSpecialCharacters` function takes a string as an argument and removes any special characters from it, leaving only alphanumeric characters and spaces.

```javascript
function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
```

## convertToSql Function

The `convertToSql` function takes an input file path and an output path as arguments. It determines the file extension of the input file and reads the file accordingly. If the file is a CSV file, it uses the `csv-parser` module to parse the file. If the file is an XLSX file, it uses the `xlsx` module. The function removes any special characters from the data and stores the cleaned data in an array.

```javascript
function convertToSql(inputPath, outputPath) {
    // ...
}
```

## writeSqlFile Function

The `writeSqlFile` function takes the cleaned data and an output path as arguments. It generates a string that represents the SQL commands to create a table and insert the data into the table. This string is then written to a new .sql file at the output path.

```javascript
function writeSqlFile(data, outputPath) {
    // ...
}
```

## Usage

The script can be used to convert a CSV or XLSX file to an SQL file with the data cleaned of special characters. The input file path and output path should be provided as arguments to the `convertToSql` function.

```javascript
convertToSql('path/to/input.csv', 'path/to/output.sql');
```

The output will be an SQL file with commands to create a table and insert the cleaned data.

<h1>Question 5: </h1>

<P><i>Using  the language of your choice develop a solution that provided url can be able to shorten the url with a custom domain name</i></p>

<h3>Solution</h3>

# shortenUrl.js

This JavaScript file contains two main functions: `shortenUrl` and `getOriginalUrl`, and a `urlDatabase` object to store the original URLs.

## shortenUrl Function

The `shortenUrl` function takes two arguments: the original URL and a custom domain. It generates a random 8-character hexadecimal string using Node.js's `crypto.randomBytes` method. This string is used as a short ID for the original URL, which is stored in the `urlDatabase` object. The function then returns the short URL, which is the custom domain followed by the short ID.

```javascript
function shortenUrl(originalUrl, customDomain) {
    const shortId = crypto.randomBytes(4).toString('hex');
    urlDatabase[shortId] = originalUrl;
    return `${customDomain}/${shortId}`;
}
```

## getOriginalUrl Function

The `getOriginalUrl` function takes a short ID as an argument and returns the original URL from the `urlDatabase` object.

```javascript
function getOriginalUrl(shortId) {
    return urlDatabase[shortId];
}
```

## Usage

The script first shortens a URL ('https://www.example.com') using a custom domain ('http://mydomain') and logs the short URL to the console. It then extracts the short ID from the short URL, retrieves the original URL using the short ID, and logs the original URL to the console.

```javascript
const shortUrl = shortenUrl('https://www.example.com', 'http://mydomain');
console.log(shortUrl);

const shortId = shortUrl.split('/').pop();

const originalUrl = getOriginalUrl(shortId);
console.log(originalUrl);
```

The output should be the short URL followed by the original URL.



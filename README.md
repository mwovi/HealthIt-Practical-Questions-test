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

Content Table
=================
<!--ts-->
   * [Home](#home)
   * [Edit](#edit)
   * [Tools](#tools)
<!--te-->

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




<h1>Question 4: </h1>
<p><i>Write a simple , well documented source code that reads from a text file, searches for a specific string and displays the number of occurrences of that string in the text file. 
Write a function that reads any of the following file formats, removes special characters and converts the file to an sql file with headers<p></i>

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



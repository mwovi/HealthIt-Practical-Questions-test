const crypto = require('crypto');

let urlDatabase = {};

function shortenUrl(originalUrl, customDomain) {
    const shortId = crypto.randomBytes(4).toString('hex');
    urlDatabase[shortId] = originalUrl;
    return `${customDomain}/${shortId}`;
}

function getOriginalUrl(shortId) {
    return urlDatabase[shortId];
}

// Usage
const shortUrl = shortenUrl('https://www.example.com', 'http://mydomain');
console.log(shortUrl); // The output should be : http://mydomain/69b21e00

// Extract the shortId from the shortUrl
const shortId = shortUrl.split('/').pop();

const originalUrl = getOriginalUrl(shortId);
console.log(originalUrl); // The output should be : https://www.example.com


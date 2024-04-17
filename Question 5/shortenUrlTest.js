const assert = require('assert');
const { shortenUrl, getOriginalUrl } = require('./shortenUrl');

describe('shortenUrl.js', () => {
    describe('shortenUrl', () => {
        it('should return a short URL in the correct format', () => {
            const originalUrl = 'https://www.example.com';
            const customDomain = 'http://mydomain';
            const shortUrl = shortenUrl(originalUrl, customDomain);
            assert.match(shortUrl, new RegExp(`^${customDomain}/[0-9a-f]{8}$`));
        });
    });

    describe('getOriginalUrl', () => {
        it('should return the original URL for a known short ID', () => {
            const originalUrl = 'https://www.example.com';
            const customDomain = 'http://mydomain';
            const shortUrl = shortenUrl(originalUrl, customDomain);
            const shortId = shortUrl.split('/').pop();
            const retrievedUrl = getOriginalUrl(shortId);
            assert.strictEqual(retrievedUrl, originalUrl);
        });
    });
});
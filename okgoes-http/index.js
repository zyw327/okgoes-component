const https = require('https');
const http = require('http');
const URL = require('url').URL;
module.exports = (options) => {
    const httpAgent = options.url.startsWith('https') ? https : http;
    const urlParse = new URL(options.url);
    return new Promise((resolve, reject) => {
        const req = httpAgent.request({
            method: options.method,
            host: urlParse.host,
            password: urlParse.password,
            username: urlParse.username,
            protocol: urlParse.protocol,
            hash: urlParse.hash,
            port: urlParse.port,
            pathname: urlParse.pathname,
            search: urlParse.search,
            headers: options.headers
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
            res.on('error', (err) => {
                reject(err);
            });
        });
        if (options.body) {
            req.write(options.body, (err) => {
                reject(err);
            });
        }
        req.end();
    });
};


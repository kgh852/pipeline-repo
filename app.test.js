const http = require('http');
const app = require('./app');

describe('GET /', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(3000, done); 
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return "testing"', (done) => {
        http.get('http://localhost:3000', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                expect(res.statusCode).toBe(200);
                expect(data).toBe('testing');
                done();
            });
        });
    });
});

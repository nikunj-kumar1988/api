const superTest = require('supertest');
const request = superTest(global.ENV);
const config = require('config');
const apiKey = global.APIKEY;
const apiToken = global.APITOKEN;
const joi = require('@hapi/joi');

/* ==> boards id
5d88e467ec1ca3587a42943c
5d7688345107172fd1cbd442 */

describe('Get boards by id ', () => {

    let baseURL = config.get("app.baseurl");
    it('should return the boards by id ', () => {
        request.get(baseURL)
            .get('/1/boards/5d7688345107172fd1cbd442?key=46a6c26def8977d0ef84d6a9693db22c&token=ff857c2f92c951abf3d61ed4060de32cd418491dcea72847959c77cd05f30db6')
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) done.fail(err);
                expect(res.status).toBe(200);
                expect(Object.keys(res.body).length).toBeGreaterThan(0);
            });
    });
});
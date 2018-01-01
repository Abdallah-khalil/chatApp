import * as request from 'request';

describe('calc', () => {
    it('should multiply 2 and 2', () => {
        expect(2 * 2).toBe(4);
    });
});


describe('get messages', () => {
    it('shoudl return 200 OK', (done) => {
        request.get('http://localhost:1100/messages', (error, response) => {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('shoudl return a List of messages', (done) => {
        request.get('http://localhost:1100/messages', (error, response) => {
            expect(JSON.parse(response.body).length).toBeGreaterThan(0);
            done();
        });
    })
});

describe('get messages from user', () => {
    it('shoudl return 200 OK', (done) => {
        request.get('http://localhost:1100/messages/heba', (error, response) => {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('name shoud be heba', (done) => {
        request.get('http://localhost:1100/messages/heba', (error, response) => {
            expect(JSON.parse(response.body)[0].name).toEqual('heba');
            done();
        });
    });
    

});
const chai = require('chai');

const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 100);
    });
}

describe('Test article features', () => {
    it('should return two', async () => {
        let result = await sum(1, 1);
        chai.expect(result).to.equal(2);
    });
});
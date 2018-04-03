var scorecard = require('./scorecard'); 

describe('scorecard', function () {
    var testObject;

    beforeEach(function () {
        testObject = new scorecard();
    });    

    it('should do something', function () {
        expect(testObject.foo).to.equal(true);
    });
    
});
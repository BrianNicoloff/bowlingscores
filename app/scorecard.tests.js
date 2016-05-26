var scorecard = require('./scorecard'); 

suite('scorecard', function () {
    var testObject;

    setup(function () {
        testObject = new scorecard();
    });    

    test('should do something', function () {
        assert.equal(testObject.foo, true);
    });
    
});
var scorecard = require('./scorecard'); 

suite('scorecard', function () {
    var testObject;

    setup(function () {
        testObject = new scorecard(); 
    });
    
    test('should track user names', function () {                
        testObject.addUser('Brian');
        testObject.addUser('Joe');

        assert.equal(testObject.users.length, 2);        
        assert.equal(testObject.users[0].name, 'Brian');
        assert.equal(testObject.users[1].name, 'Joe');
    });
    
});
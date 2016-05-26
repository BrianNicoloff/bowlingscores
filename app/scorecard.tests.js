'use strict';

var scorecard = require('./scorecard'); 

suite('scorecard', function () {
    var testObject;

    setup(function () {
        testObject = new scorecard(); 
    });
    
    test('add score adds to totalScore', function () {
        testObject.addScore(4);

        var result = testObject.totalScore();
        
        assert.equal(result, 4);
    });

    test('add multiple scores adds to total score', function () {
        testObject.addScore(1);
        testObject.addScore(1);
        testObject.addScore(1);

        var result = testObject.totalScore();

        assert.equal(result, 3);
    });

    [11, 20, 30].forEach(function (score) {
        test('cannot add more than 10 at a time - score = ' + score, function () {
            try {
                testObject.addScore(score);
                assert.fail('should have thrown out of range exception!');
            } catch (ex) {
                assert.equal(ex, 'Out of range exception');
            }
        });
    });

    test('adds two bowl scores per frame', function () {
        testObject.addScore(1);
        testObject.addScore(2);
        testObject.addScore(3);
        testObject.addScore(4);

        assert.equal(testObject.frameScore(1), 3);
        assert.equal(testObject.frameScore(2), 7);
    }); 
    
    test('does not add more than 10 to a frame', function () {
        testObject.addScore(8);
        testObject.addScore(3);

        try {
            testObject.frameScore(1);
            assert.fail('should not have gotten here');
        } catch (ex){
            assert.equal(ex, 'cannot bowl more than 10 in a frame');
        }
    });
    
});
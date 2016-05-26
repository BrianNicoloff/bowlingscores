'use strict';

module.exports = function () {
    var totalScore = 0;
    var frames = {};
    var currentFrame = 1;
    var currentFrameBowl = 1;

    this.addScore = function (score) {
        if (score > 10) {
            throw 'Out of range exception';
        }
        
        if (!frames[currentFrame]) {
            frames[currentFrame] = {}
        }
        
        frames[currentFrame][currentFrameBowl] = score;
        
        currentFrame = currentFrameBowl === 1 ? currentFrame : currentFrame + 1;
        currentFrameBowl =  currentFrameBowl === 1 ? 2 : 1;
        
        totalScore += score;    
    }

    this.frameScore = function (frame) {
        var frameScore = frames[frame][1] + frames[frame][2];
        if (frameScore > 10) {
            throw 'cannot bowl more than 10 in a frame';
        }
        return frameScore;
    }

    this.totalScore = function () {
        return totalScore;
    }
}
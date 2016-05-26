# Bowling Scores

### Purpose:

The purpose of this excercise is to create a bowling score application in node that tracks the total score and per frame score of a bowler.  This excersise is designed to be a pair programming TDD lab for interviewing javascript candidates.

### Acceptance Criteria:

- When you add a score it should add to the total score
- You cannot add a score of more than 10 at a time
- No more than two bowls should be added to a frame
- You cannot add a score of more than 10 to a frame
- You cannot have more than 10 frames in a game
- Total score should account for strikes
- Total score should account for spares
- Frame score should account for strikes
- Frame score should account for spares
- You should be able to reset a game and the scores will be cleared
- You can have multiple user scores in a game

### Running the Tests:

Make sure Node is installed on the workstation.  Browse to the root directory of this repository. Type the following to run tests:

```npm test```

This will start the mocha tests using the mocha library in the ./node_modules/mocha/bin/mocha directory and target all javascript files in the ./app directory.  The test script will run in "watch" mode which will cause the tests to run any time a file is saved in the ./app directory of the project.


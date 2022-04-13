const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name (nickname)? ", (answer1) => {
  rl.question("What's an activity you enjoy the most? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Lastly, what's your favourite meal? ", (answer4) => {
        console.log(`Meet ${answer1}. His favourite activity is ${answer2} and enjoys listening to ${answer3} while 
        cruising down to a local restaurant where he consistently orders his favourite dish, ${answer4}.`);
        rl.close();
      });
    });
  });
});
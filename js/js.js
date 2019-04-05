// Generate an Array with 90 indexes (0-89)
// let arr = Array.from(Array(90).keys())


function rollDice() {
  return new Promise((resolve, reject) => {
    var duration = 3000;
    var output = $("#change");
    var started = new Date().getTime();
    
    const intervalId = setInterval(() => {
        let formattedNumber = ("0" + Math.floor(Math.random() * 90 + 1)).slice(-2);

        if ( new Date().getTime() - started < duration ) {
            output.text(formattedNumber);  // Changes dom text
        } else {
            clearInterval(intervalId);  // Stops the interval
            output.text(formattedNumber);  // Changes dom text
            resolve(formattedNumber);
        }
    }, 100)
  })
}

function num() {
    rollDice()
    .then(value => console.log(`${value}`))
}
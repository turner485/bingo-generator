
function ani() {

    // Animate!
    animationTimer = setInterval(function() {
        
       
        if (
            output.text().trim() === desired ||
            new Date().getTime() - started > duration
        ) {
            clearInterval(animationTimer);
        } else {
            let formattedNumber = ("0" + Math.floor(Math.random() * 90 + 1)).slice(-2);
            // Generate a random string to use for the next animation step
            output.text(formattedNumber);
        }
    }, 100);
}

function rollDice() {
  return new Promise((resolve, reject) => {
    var output, started, duration, desired;
    duration = 3000;
    output = $("#change");
    started = new Date().getTime();
    


    const intervalId = setInterval(() => {
        if (
            output.text().trim() === desired ||
            new Date().getTime() - started > duration
        ) {
            clearInterval(intervalId);
        } else {
            let formattedNumber = ("0" + Math.floor(Math.random() * 90 + 1)).slice(-2);
            // Generate a random string to use for the next animation step
            output.text(formattedNumber);
            resolve(formattedNumber);
        }
    }, 100)
  })
}

 function num() {
    rollDice().then(value => console.log(`${value}`))
    
 }
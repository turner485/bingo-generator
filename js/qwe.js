function rollDice() {
  return new Promise((resolve, reject) => {
    const dice = document.getElementById("change")

    let i = Math.floor((Math.random() * 90) + 1)

    const intervalId = setInterval(() => {
      const diceValue = Math.floor((Math.random() * 90) + 1)
      if (--i < 1) {
        clearInterval(intervalId)
        resolve(diceValue)
        console.log(diceValue);
      }
    }, 50)
  })
}

 function num() {
    rollDice().then(value => alert(`Dice rolled: ${value}`))
    
 }
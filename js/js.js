// Generate an Array with 90 indexes (0-89)
let arr = [];

for (let i = 1; i < 91; i++) {
    arr.push(i); //Example, pushing 5 integers in an array
}

function bingo() {
    return new Promise((resolve, reject) => {
        let duration = 100;
        let output = $("#change");
        let started = new Date().getTime();

        const intervalId = setInterval(() => {
            let key = Math.floor(Math.random() * arr.length);
            let formattedNumber = ("0" + arr[key]).slice(-2);
            let magicNumber = output.text(formattedNumber);
            if (new Date().getTime() - started < duration) {
                magicNumber;
            } else {
                clearInterval(intervalId); // Stops the interval
                formattedNumber;
                let index = arr.indexOf(arr[key]);
                arr.splice(index, 1);
                console.log(arr);
                // $(".contain").append("<p>" + formattedNumber + "</p>");
				$(".cell[data-cell='"+formattedNumber+"']").text(formattedNumber);

            }
        }, 100);
    });
}

console.log(arr);

// Generate an Array with 90 indexes (0-89)
let arr = [];

for (let i = 1; i < 91; i++) {
    arr.push(i); //Example, pushing 5 integers in an array
}

let y = []

function getNumber() {

    return new Promise((resolve, reject) => {
        let duration = 1000;
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
                x = Number(formattedNumber);
                y.push(x);
                let z = y.slice(-2);
                console.log(z);
                if (z.length <= 1) {
                    return;
                } else {
                     $(".cell[data-cell='"+ z[0] +"']").text(z[0]).addClass("highlight");
                     $("#second").text(z[0]).addClass("highlight");
                }
            }
        }, 100);
    });
}

function remove() {
    $(".cell").removeClass("highlight");
}
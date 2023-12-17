console.log("Before...");

let timer = setInterval(cb1, 1000);

function cb1() {
    console.log("I am cb1!");
}

setTimeout(() => {
    clearInterval(timer);
}, 3000);

console.log("After...");
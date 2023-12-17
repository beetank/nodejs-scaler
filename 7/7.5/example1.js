console.log("Before...");

setTimeout(cb1, 2000);

function cb1() {
    console.log("I am cb1!");
}

console.log("After...");
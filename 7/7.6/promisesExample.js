// how to produce a promise
let myPromise = new Promise(function(resolve, reject) {
    const a = 7;
    const b = 18;

    setTimeout(() => {
        if (a===b) {
            resolve("Equal");
        }
        else {
            reject("Unequal");
        }
    }, 2000);
})

// pending state
// console.log(myPromise);

// consuming promises
// fulfilled state
myPromise.then((result) => {
    console.log(result);
});


// rejected state
myPromise.catch((failedResult) => {
    console.log(failedResult);
});
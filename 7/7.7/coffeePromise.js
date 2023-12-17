function placeOrder(drink) {
    return new Promise((resolve, reject) => {
        if (drink === "coffee")
        {
            resolve("Received Coffee!");
        }
        else
        {
            reject("Rejected Others!");
        }
    })
}

function processOrder(order) {
    return new Promise((resolve) => { 
        // don't need to specify reject all the time
        // as here rejecting the order means simply scamming the customer
        console.log("Order is being processed!");
        resolve(`${order} is served!`);
    })
}

// placeOrder("coffee").then((orderPlaced) => {
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then((processedOrder) => { // Chaining of promises
//     console.log(processedOrder);
// }).catch((err) => {
//     console.log(err);
// }); 

// async/await
async function serveOrder() {
    try {
        let orderPlaced = await placeOrder("coffee"); // this involves a promise
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced); // this involves a promise too
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}

serveOrder();
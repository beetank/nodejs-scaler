const os = require('os');

// to get the architecture
console.log(os.arch());

// to get the platform (windows, linus, etc.)
console.log(os.platform());

// to get the network interfaces of the system
console.log(os.networkInterfaces());

// to get the details of your CPU
console.log(os.cpus());

// to check total & free memory available on the device
console.log(os.totalmem());
console.log(os.freemem());
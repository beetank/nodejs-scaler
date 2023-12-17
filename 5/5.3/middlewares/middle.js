function myMiddleware(req, res, next) {
    console.log("I am the custom middleware.");
    next(); 
}

module.exports = myMiddleware;
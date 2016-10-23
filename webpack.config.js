module.exports = {

    entry: ["./javascript/app.js", "./javascript/sentMessage.js", "./javascript/alertStyle.js"],
    output: {
        path: __dirname + "/assets/javascript",
        filename: "./bundle.js"
    }
}

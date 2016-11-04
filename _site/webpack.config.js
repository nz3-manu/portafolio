module.exports = {

    entry: ["./javascript/app.js", "./javascript/sentMessage.js", "./javascript/alertStyle.js"],
    output: {
        path: __dirname + "/assets/javascript",
        filename: "./bundle.js"
    },
    module: {
   // JS, JSX and SASS loaders
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
           presets: ['es2015', 'react'] //presets son los que babel va a utilizar para poder buscar y transformar la sintaxis a la que deseamos, tenemos que instalar dos npm fundamentales para poder que funcione babel{babel-core, babel-loader}
         }
     }
   ]
 }//Close module

}

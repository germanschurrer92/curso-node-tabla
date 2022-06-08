const {crearArchivo} = require('./helpers/multiplicar');

var colors = require('colors');
 

console.clear();

const [,,arg3='base=5'] = process.argv;
const [,base] = arg3.split('=');


crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

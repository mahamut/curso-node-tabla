/*
console.clear();

const base = 5

console.log('======================');
console.log('    Tabla del: ', base, '    ');
console.log('======================');

for (let i = 1; i <= 10; i++){
        let result = base * i;
        console.log('El resutado de: 5 x', i, 'es igual a:', result);
};
*/
//ejercicio de ciclo for
const {
        crearArchivoTabla
} = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv); ARGUMENTOS DE CONSOLA
/* const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('='); */

//console.log('Process:', process.argv);
console.log('Yargs: ', argv);
console.log('Base yargs: ', argv.base);

crearArchivoTabla( argv.b, argv.l, argv.h )
        .then(nombreArchivo => console.log(nombreArchivo))
        .catch(err => console.log(err));
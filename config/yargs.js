const argv = require('yargs')
    .option('b', {
        alias: 'base',
        describe: 'Número enviado para obtener su tabla',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        describe: 'Muestra tabla de multiplicar en consola',
        type: 'boolean',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        describe: 'Número final de la tabla de multiplicar',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser tipo número'
        }
        return true;
    })
    .argv

module.exports = argv;
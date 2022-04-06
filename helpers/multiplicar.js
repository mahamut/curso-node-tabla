const fs = require("fs");
const colors = require('colors/safe');

/* HACER FUNCIÓN
const crearArchivoTabla = (base = 5) => {};
console.log("======================");
    console.log("    Tabla del: ", base, "    ");
    console.log("======================");
    let salida = "";

    for (let i = 1; i <= 10; i++) {
      let result = base * i;
      salida += `${base} x ${i} = ${result}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;

      console.log(`tabla-${base}.txt: archivo creado`);
    });

/* HACERLO COMO PROMESA 
    const crearArchivoTabla = (base = 5) => {
    
    return new Promise( ( resolve, reject ) => {
      console.log("======================");
      console.log("    Tabla del: ", base, "    ");
      console.log("======================");
      let salida = "";
  
      for (let i = 1; i <= 10; i++) {
        let result = base * i;
        salida += `${base} x ${i} = ${result}\n`;
      }
  
      console.log(salida);
  
      fs.writeFileSync(`tabla-${base}.txt`, salida);
  
      resolve(`tabla-${base}.txt: archivo creado`);
    })  
    
*/

/* HACER PROMESA CON ASYNC */
const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {

  try {

    let salida = ''; 
    let consola = '';

    for ( let i = 1; i <= hasta; i++ ) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
    }

    if ( listar ) {
      console.log(colors.inverse("======================"));
      console.log(colors.red("    Tabla del: "), colors.green(base), colors.red("    "));
      console.log(colors.inverse("======================"));

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt: archivo creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivoTabla
};
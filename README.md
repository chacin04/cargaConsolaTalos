# cargaConsolaTalos-NODEjs

process.stdout.write(`\r [${(" ▮ ").repeat(Math.trunc((((index+1)*100)/datoscsv.length)/10))}${(' ▯ ').repeat(10-(Math.trunc((((index+1)*100)/datoscsv.length)/10)))} ] ${datoscsv.length} // ${index+1} // ${((((index+1)*100)/datoscsv.length)).toFixed(2)} %`)

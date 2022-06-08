const fs = require('fs');
const crearArchivo = async(base = 5) =>{
    try {

        console.log('===================');
        console.log('    Tabla del '.trap.red, base);
        console.log('===================');
    
        let salida = '';
        for (let index = 1; index <=10 ; index++) {
            
            salida += `${base}x${index} = `+`${base*index}\n`.underline.bgBrightGreen
            
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

   

}

module.exports = {
    crearArchivo
}
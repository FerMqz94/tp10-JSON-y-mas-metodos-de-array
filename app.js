const datosBici = require('./datosBici.js')

const dhBici = {
    bicicletas: datosBici.leerJSON(),
    buscarBici: function(id) {
    const biciEnc = this.bicicletas.filter((bicis) => {
        return bicis.id === id
    })
    if(biciEnc.length === 0){
        return null;
    }
    return biciEnc;
},
    venderBici: function(id) {
    const biciEnc = this.buscarBici(id)
    if(biciEnc === null) {
        return "Bicicleta no encontrada";
    }
    biciEnc[0].vendida = true;
    return biciEnc[0];
    },
    biciParaLaVenta: function() {
    const bicisDisponibles = this.bicicletas.filter((bici) => {
    return !bici.vendida
    })
    return bicisDisponibles
    },
    totalDeVentas: function() {
        const total = this.bicicletas.reduce((acumulador,bici) => {
        if(bici.vendida) {
            acumulador += bici.precio;
        }
        return acumulador
        },0)
        return total
    },
    // aumentoBici: function(porcentaje) {
    // return this.bicicletas.map(bici => {
    // return 

    // })
    // }
    
}

// console.log(dhBici.buscarBici(2));
// console.log(dhBici.venderBici(1));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());






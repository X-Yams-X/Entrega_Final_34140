import datajson from '../data.json' assert { type: 'json' };

class Tramo {
    constructor(origen, destino) {
        this.origen = origen;
        this.destino = destino;
    }
    //Valida que el origen o destino sean iguales
    validateEqualTramo() { return this.origen === this.destino; }
    //Existe el elemento en el array
    isExistTramo(tramo) {
        //return listCity.find(e => e === element);
        let isValidate;
        datajson.forEach(element => {
            //destructuramos el element
            let { name } = element;
            isValidate = name == tramo ? true : false;
        });
        return isValidate;
    }
    //Metodo que entrega el valor del tramo - Aplicar logica, 
    getValueTramo(origen, destino) {
        let value = 0;
        //Ahora sumamos cada valor dentro del json
        datajson.forEach(element => {
            //destructuramos el element
            let { name, distanceValue } = element;
            value = value + parseInt(name == origen ? distanceValue : 0);
            value = value + parseInt(name == destino ? distanceValue : 0);
        });
        return value;
    }
}

export default Tramo;
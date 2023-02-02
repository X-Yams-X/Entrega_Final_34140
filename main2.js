import datajson from './data.json' assert { type: 'json' };
import Tramo from './tramo.js';

//Inicializar los select Origen
let selectOrigen = document.getElementById("SelectOrigen");
datajson.forEach(element => {
    let option = document.createElement("option");
    let {name} = element;
    option.value, option.text  = name;
    selectOrigen.appendChild(option);
});

//Inicializar los select destino
let selectDestino = document.getElementById("SelectDestino");
datajson.forEach(element => {
    let option = document.createElement("option");
    let {name} = element;
    option.value, option.text  = name;
    selectDestino.appendChild(option);
});


let btn = document.getElementById("btnCalcular");
btn.onclick = () => {

    const tramo = new Tramo(selectOrigen.value, selectDestino.value);
    
    if (tramo.validateEqualTramo()) {
        alert("Son iguales");
    } else {
        if (tramo.isExistTramo(selectOrigen.value) || tramo.isExistTramo(selectDestino.value)) {
            alert("No existe el tramo, favor revisar opcion 2");
        } else {
            //Ahora calcular el valor por las dimesiones del paquete
            let valor = tramo.getValueTramo(selectOrigen.value, selectDestino.value);
            console.log(valor);
            //countPackage = parseInt(MsgPackage());
            //valor = valor + parseInt(CalcularMontoTransporte(countPackage));
            //alert(`El Valor del viaje es ${valor} para los ${countPackage} Paquetes`);
        }
    }
};

//Exportamos el data del json;
import datajson from './data.json' assert { type: 'json' }; 

//Arrays con los datos 
//const listCity = ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro de Atacama", "Tocopilla", "Maria Elena"];

//DEFINICIÓN DE CLASES
class Tramo{  
  constructor(origen, destino){
    this.origen = origen;
    this.destino = destino;
  }
  //Valida que el origen o destino sean iguales
  validateEqualTramo() { return this.origen === this.destino ;} 
  //Existe el elemento en el array
  isExistTramo(tramo){   
    //return listCity.find(e => e === element);
    let isValidate;
    datajson.forEach(element => {
      //destructuramos el element
      let {name} = element;
      isValidate = name == tramo? true : false; 
    });
    return isValidate;
  }
  //Metodo que entrega el valor del tramo - Aplicar logica, 
  getValueTramo(origen, destino){
    let value = 0;
    //Ahora sumamos cada valor dentro del json
    datajson.forEach(element => {
      //destructuramos el element
      let {name, distanceValue} = element;
      value = value + parseInt(name == origen ? distanceValue : 0); 
      value = value + parseInt(name == destino ? distanceValue : 0);
    });
    return value;
  }
}
//*************PROGRAMA*****************
let opcion = parseInt(MsgMenu());
let valor,countPackage = 0;
while(opcion != 3){
  switch(opcion){
    case 1: 
      let origen = MsgOrigen();
      let destino = MsgDestino();
      const tramo = new Tramo(origen,destino);
      if(tramo.validateEqualTramo()){
        alert("Son iguales");
      }else{
        if(tramo.isExistTramo(origen) || tramo.isExistTramo(destino)){
          alert("No existe el tramo, favor revisar opcion 2");
        }else{
          //Ahora calcular el valor por las dimesiones del paquete
          valor = tramo.getValueTramo(origen,destino);
          console.log(valor);
          countPackage = parseInt(MsgPackage());
          valor = valor + parseInt(CalcularMontoTransporte(countPackage));
          alert(`El Valor del viaje es ${valor} para los ${countPackage} Paquetes`);
        }
      }
      break;
    case 2:
      let listCity="";
      datajson.forEach(element => {
        //destructuramos el element
        let {name}=element;
        listCity = name + "-" + listCity;
      });
      listCity = listCity.substring(0,listCity.length-1)
      alert(listCity);
      break;
  } 
  opcion = parseInt(MsgMenu());
}


//Menu de opciones 
function MsgMenu(){
  var opcion = prompt("*************\n Seleccione una opción \n 1°- Calcular Monto de Transporte \n 2°- Listar Tramos \n 3°- Salir \n  *************");
  return opcion;
}

//Ingresar Destinos y Origen 
function MsgOrigen(){
  var origen = prompt("*************\n Escriba el Origen \n*************");
  return origen;
}

function MsgDestino(){
  var destino = prompt("*************\n Escriba el Destino \n*************");
  return destino;
}

//Mensaje de paquetes
function MsgPackage(){
  var countPackage = prompt("*************\n¿Cuantos Paquetes va a trasportar? \n  *************");
  return countPackage;
} 


//Calcular el total por dimensiones
function CalcularMontoTransporte(countPackage){
  let MontoTotal = 0 ;
  for (var i = 1; i <= countPackage; i++) {
    let ancho = parseFloat(prompt("*************\n¿Ingrese Ancho del Paquete "+i+" ? \n  *************"));
    let altura = parseFloat(prompt("*************\n¿Ingrese Alto del Paquete "+i+" ? \n  *************"));
    let largo = parseFloat(prompt("*************\n¿Ingrese largo del Paquete "+i+" ? \n  *************"));
    //Aplicar algoritmo y formula -- Segunda entrega
    let CalculoPaquete = (ancho * altura * largo).toFixed(2);
    MontoTotal = MontoTotal + CalculoPaquete;
  }
  return MontoTotal;
}

//Sistema de Calculo del valor de paquetes

//Arrays con los datos 
const listCity = ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro de Atacama", "Tocopilla", "Maria Elena"];

//DEFINICIÓN DE CLASES
class Tramo{  
  constructor(origen, destino){
    this.origen = origen;
    this.destino = destino;
  }
  //Valida que el origen o destino sean iguales
  validateEqualTramo() { return this.origen === this.destino ;} 
  //Existe el elemento en el array
  isExistTramo(element){
    return listCity.find(e => e === element);
  }
  //Metodo que entrega el valor del tramo - Aplicar logica, 
  getValueTramo(){
    return Math.floor(Math.random()*1000);
  }
}
//*********PROGRAMA*****************
let opcion = parseInt(MsgMenu());
let valor,cantPck = 0;
while(opcion != 3){
  switch(opcion){
    case 1: 
      let origen = MsgOrigen();
      let destino = MsgDestino();
      const tramo = new Tramo(origen,destino);
      if(tramo.validateEqualTramo()){
        alert("Son iguales");
      }else{
        if(tramo.isExistTramo(origen) === undefined || tramo.isExistTramo(destino) === undefined){
          alert("No existe el tramo, favor revisar opcion 2");
        }else{
          //Ahora calcular el valor por las dimesiones del paquete
          valor = tramo.getValueTramo()
          cantPck = parseInt(MsgPackage());
          valor = valor + parseInt(CalcularMontoTransporte(cantPck));
          alert(`El Valor del viaje es ${valor} para los ${cantPck} Paquetes`);
        }
      }
      break;
    case 2:
      //Manejos de arrays
      listCity.sort(); // Ordeno
      alert(listCity.join(' - '));//Concadenar los elementos
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
  var cantPck = prompt("*************\n¿Cuantos Paquetes va a trasportar? \n  *************");
  return cantPck;
} 


//Calcular el total por dimensiones
function CalcularMontoTransporte(cantPck){
  let MontoTotal = 0 ;
  for (var i = 1; i <= cantPck; i++) {
    let ancho = parseFloat(prompt("*************\n¿Ingrese Ancho del Paquete "+i+" ? \n  *************"));
    let altura = parseFloat(prompt("*************\n¿Ingrese Alto del Paquete "+i+" ? \n  *************"));
    let largo = parseFloat(prompt("*************\n¿Ingrese largo del Paquete "+i+" ? \n  *************"));
    //Aplicar algoritmo y formula -- Segunda entrega
    let CalculoPaquete = (ancho * altura * largo).toFixed(2);
    MontoTotal = MontoTotal + CalculoPaquete;
  }
  return MontoTotal;
}

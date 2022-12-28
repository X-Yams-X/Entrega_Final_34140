//Sistema de Calculo del valor de paquetes
let opcion = parseInt(MsgMenu());
let valor,cantPck = 0;
while(opcion != 3){
  switch(opcion){
    case 1: 
      let origen = MsgOrigen();
      let destino = MsgDestino();
      //Definir varios tramos y Validar origen y destinos igual 
      if((origen == 'Calama' && destino == "Antofagasta") || (origen == 'Antofagasta' && destino == "Calama")){
        valor = 400;
        //Ahora calcular el valor por las dimesiones del paquete
        cantPck = parseInt(MsgPackage());
        valor = valor + parseInt(CalcularMontoTransporte(cantPck));
      }else{
        alert("No existe Valores para esos tramos")
      }    
      break;
    case 2: 
      //A modo de ejemplo se utilizara se usara un array
      break;
  }
  let msgFinal = `El Valor del viaje es ${valor} para los ${cantPck} Paquetes`;
  alert(msgFinal);
  opcion = parseInt(MsgMenu());
}


//Menu de opciones 
function MsgMenu(){
  var opcion = prompt("*************\n Seleccione una opción \n 1°- Calcular Monto de Transporte \n 2°- Listar Tramos \n 3°- Salir \n  *************");
  return opcion;
}

//Ingresar Destinos y Origen 
function MsgOrigen(){
  var origen = prompt("*************\n Escriba el Origen \n 1°- Calama \n 2°- Antofagasta \n  *************");
  return origen;
}

function MsgDestino(){
  var destino = prompt("*************\n Escriba el Destino \n 1°- Calama \n 2°- Antofagasta \n  *************");
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




import dataset from "../data.json" assert { type: "json" };
import Tramo from "./Entities/tramo.js";

//Inicializar Variables
let listHistoric = [];
let containerCard = document.getElementById("containerCard");
var stringContainerCard = "";

//Inicializar html
let selectOrigen = document.getElementById("SelectOrigen");
let selectDestino = document.getElementById("SelectDestino");

//Revisamos si tenemos data en LocalStorage
listHistoric = JSON.parse(localStorage.getItem("listHistoric"));
listHistoric.forEach((element) => {
  stringContainerCard +=
    '<div class="col d-flex align-items-start"><div><h4>' +
    element.Origen.concat("-", element.Destino) +
    "</h4><p>" +
    element.Valor +
    "</p></div></div>";
});
containerCard.innerHTML = stringContainerCard;

  
//Cargar listas por json local
dataset.forEach((element) => {
  let option = document.createElement("option");
  let { name } = element;
  option.value, (option.text = name);
  selectOrigen.appendChild(option);
});

//!Cargar lista por una API utilizando fecth (No encontre api online de ciudades Chilena) por eso no  puede usar await
fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let option = document.createElement("option");
      let { name } = element;
      option.value, (option.text = name);
      selectDestino.appendChild(option);
    });
  });


//Boton insertar paquetes
btnCalcularViaje.onclick = () => {
  const tramo = new Tramo(selectOrigen.value, selectDestino.value);

  if (tramo.validateEqualTramo()) {
    alert("Son iguales");
  } else {
    if (
      tramo.isExistTramo(selectOrigen.value) ||
      tramo.isExistTramo(selectDestino.value)
    ) {
      alert("No existe el tramo, favor revisar opcion 2");
    } else {
      //Ahora calcular el valor por las dimesiones del paquete
      let valor = tramo.getValueTramo(selectOrigen.value, selectDestino.value);

      //Guardamos el historial
      let viaje = {
        "Origen":selectOrigen.value,
        "Destino":selectDestino.value,
        "Valor":valor
      }
      listHistoric.push(viaje);
      console.log(listHistoric);
      localStorage.setItem("listHistoric",JSON.stringify(listHistoric));
      Swal.fire({
        title: "¿Quieres Guardar el Viaje?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Guardado!");
          setTimeout(function(){
            window.location.reload();
        }, 1500);
          
        } else if (result.isDenied) {
          Swal.fire("No se Guardo El viaje");
          setTimeout(function(){
            window.location.reload();
        }, 1500);
        }
      });
    }
  }
};

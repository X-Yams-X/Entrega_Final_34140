import datajson from "../data.json" assert { type: "json" };
import Tramo from "./tramo.js";

//Inicializar Variables

//Inicializar html
let selectOrigen = document.getElementById("SelectOrigen");
let selectDestino = document.getElementById("SelectDestino");

let containerPrincipal = document.getElementById("containerPrincipal");
let btnInsertPackage = document.getElementById("btnInsertPackage");


//Cargar listas
datajson.forEach((element) => {
  let option = document.createElement("option");
  let { name } = element;
  option.value, (option.text = name);
  selectOrigen.appendChild(option);
});
datajson.forEach((element) => {
  let option = document.createElement("option");
  let { name } = element;
  option.value, (option.text = name);
  selectDestino.appendChild(option);
});

//Boton insertar paquetes
btnInsertPackage.onclick = () => {

  const tramo = new Tramo(selectOrigen.value, selectDestino.value);

  if (tramo.validateEqualTramo()) {
    alert("Son iguales");
  } else {
    if (tramo.isExistTramo(selectOrigen.value) ||tramo.isExistTramo(selectDestino.value)) {
      alert("No existe el tramo, favor revisar opcion 2");
    } else {
      //Ahora calcular el valor por las dimesiones del paquete
      let valor = tramo.getValueTramo(selectOrigen.value, selectDestino.value);

      containerPrincipal.style.display = "block";
      let countPackage = document.getElementById("txtCountPackage"); // Aun no se implemeta el for por cada paquete ingresado.
      let containerPaquete = document.getElementById("containerPaquete");

      //Inserta acá el for para cada Card pequeña
      containerPaquete.innerHTML =
        '<div class="col-auto"> <input type="number" class="form-control" id="txtLargo" placeholder="Largo"></div><br><div class="col-auto"> <input type="number" class="form-control" id="txtAncho" placeholder="Ancho"></div><br><div class="col-auto"><input type="number" class="form-control" id="txtAlto" placeholder="Alto"></div><br>';

      //Creamos el boton
      let btn = document.createElement("button");
      btn.innerHTML = "Calcular";
      btn.className = "w-100 btn btn-lg btn-outline-primary";
      btn.addEventListener("click", function () {
        //Buscar la forma de recuperar datos dinamicos
        let txtLargo = parseInt(document.getElementById("txtLargo").value);
        let txtAncho = parseInt(document.getElementById("txtLargo").value);
        let txtAlto = parseInt(document.getElementById("txtLargo").value);
        let CalculoPaquete = parseInt(txtAncho * txtAlto * txtLargo);
        let MontoTotal = valor + CalculoPaquete;
        alert(MontoTotal);
      });
      containerPaquete.appendChild(btn);
    }
  }
};

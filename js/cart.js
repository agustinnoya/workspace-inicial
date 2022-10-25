const url_carrito = "https://japceibal.github.io/emercado-api/user_cart/" + localStorage.getItem(`usuario`) + ".json"
console.log(url_carrito)
let carrito


function carrito_JSON() {
  fetch(url_carrito)
    .then(response => response.json())
    .then(data => { console.log(data); return data })
    .then(data => { carrito = data; return data })
    .then(producto => { console.log("carrito", carrito); return carrito })
    .then(producto => carrito_print())
    .then(producto => carrito_subtotal_inicial())
    .catch(error => console.log(error))
}
carrito_JSON();


function carrito_print() {
  console.log("dentro de carrito", carrito)
  let data_carrito = ""

  for (let i = 0; i < carrito.articles.length; i++) {
    data_carrito += `<img class="imagen_carrito" src="${carrito.articles[i].image}"><p>${carrito.articles[i].name}</p><p>USD ${carrito.articles[i].unitCost}</p> <div><input type="text" name="cantidad" class="form-control cantidad_box" id="${i}" value="1"
        oninput="cantidad_cuadro()" required></div>`
  }
  document.getElementById("carrito_producto").innerHTML = data_carrito;
  return carrito;
}

function carrito_subtotal_inicial() {
  console.log("dentro de carrito", carrito)
  let data_subtotal = ""
  for (let i = 0; i < carrito.articles.length; i++) {
    data_subtotal += `<strong><p>USD ${carrito.articles[i].unitCost}</p></strong>`
  }
  document.getElementById("carrito_subtotal").innerHTML = data_subtotal;
  return carrito;
}


function cantidad_cuadro() {

  let subtotales = ""

  for (let i = 0; i < carrito.articles.length; i++) {
    if (document.getElementById([i]).value > 0) {
      subtotales += document.getElementById([i]).value * carrito.articles[i].unitCost

    } else {
      subtotales += "<p>La cantidad tiene</p> <p>que ser superior a 1</p>"
    }
  }

  carrito_subtotal(subtotales)

}

function carrito_subtotal(subtotales) {
  console.log(subtotales)
  let data_subtotal = ""

  for (let i = 0; i < carrito.articles.length; i++) {
    data_subtotal += `
        <strong><p>USD ${subtotales}</p></strong>
            `
  }

  document.getElementById("carrito_subtotal").innerHTML = data_subtotal;

  costos_de_envio(subtotales)
}

function costos_de_envio(subtotales) {
  if (document.getElementById("premium").checked) {
    costo_envio = subtotales * 0.15
    console.log("prem")
    console.log(costo_envio)
    imprimir_costos(subtotales, costo_envio)
  } else if (document.getElementById("express").checked) {
    costo_envio = subtotales * 0.07
    console.log("expp")
    console.log(costo_envio)
    imprimir_costos(subtotales, costo_envio)
  } else if (document.getElementById("standard").checked) {
    costo_envio = subtotales * 0.05
    console.log("stand")
    imprimir_costos(subtotales, costo_envio)
  }

}




function imprimir_costos(subtotales, costo_envio) {
  let total = costo_envio + parseInt(subtotales)
  costo_envio = Math.round(costo_envio)
  let costos_costos = ""


  costos_costos = `<div class="list-group-item list-group-item-action cursor-active">
              
                <div class="col-3">
                </div>
                <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                    <h4 class="text-muted">Subtotal</h4>
                    <h5 class="text-muted">USD ${subtotales}</h5>
                  </div>
                  <p class="text-muted">Costo unitario del producto por cantidad</p>
                </div>
              
            </div>




            <div class="list-group-item list-group-item-action cursor-active">
              <div class="">
                <div class="col-3">
                </div>
                <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                    <h4 class="text-muted">Costo de envio</h4>
                    <h5 class="text-muted">USD ${costo_envio}</h5>
                  </div>
                  <p class="text-muted">Segun el tipo de envio</p>
                </div>
              </div>
            </div>




            <div class="list-group-item list-group-item-action cursor-active">
              <div class="">
                <div class="col-3">
                </div>
                <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                    <h4 class="text-muted">Total ($)</h4>
                    <h5 class=""><strong>USD ${total}</strong> </h5>
                  </div>
                </div>
              </div>
            </div>`


  document.getElementById("costos").innerHTML = costos_costos;
}



function pago_credito() {
  var credito = document.querySelectorAll('.credito input[type="text"]');
  var transf = document.querySelectorAll('.transferencia input[type="text"]');

  for (var i = 0; i < credito.length; i++) {
    credito[i].disabled = false;
  }

  for (var i = 0; i < transf.length; i++) {
    transf[i].disabled = true;
  }
}

function pago_tranf() {

  var credito = document.querySelectorAll('.credito input[type="text"]');
  var transf = document.querySelectorAll('.transferencia input[type="text"]');

  for (var i = 0; i < credito.length; i++) {
    credito[i].disabled = true;
  }

  for (var i = 0; i < transf.length; i++) {
    transf[i].disabled = false
  }

}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


function metodo_de_pago() {

  const credito = document.getElementById("credito").checked
  const transferencia = document.getElementById("Transferencia").checked
  let metodo = ""
  let alerta = ""
  if (credito) {
    metodo = `Credito`;
    document.getElementById("Forma-pago-opcion").innerHTML = metodo;
    alerta = ``
    document.getElementById("alerta_no_selecciono_metodo_pago").innerHTML = alerta;

  } else if (transferencia) {
    metodo = `Transferencia bancaria`;
    document.getElementById("Forma-pago-opcion").innerHTML = metodo;
    alerta = ``
    document.getElementById("alerta_no_selecciono_metodo_pago").innerHTML = alerta;

  } else if (credito == transferencia) {
    metodo = `No ha seleccionado`;
    document.getElementById("Forma-pago-opcion").innerHTML = metodo;
    alerta = `<p style="color: red">Debe seleccionar una forma de pago</p>`
    document.getElementById("alerta_no_selecciono_metodo_pago").innerHTML = alerta;

  }
}


function comprobacion_metodo_de_pago() {

  const calle = document.getElementById("Calle_credito").value
  const cvc = document.getElementById("cvc").value
  const vencimiento = document.getElementById("Vencimiento").value
  const numero_de_cuenta = document.getElementById("numero_de_cuenta").value
  const credito = document.getElementById("credito").checked
  const transferencia = document.getElementById("Transferencia").checked


  let alerta = ""
  if (calle.length < 1 && cvc.length < 1 && vencimiento.length < 1 && credito) {
    alerta = `<p style="color: red">faltan campos</p>`;
    document.getElementById("alerta_faltan_campos").innerHTML = alerta;

  } else if (numero_de_cuenta.length < 1 && transferencia) {
    alerta = `<p style="color: red">faltan campos</p>`;
    document.getElementById("alerta_faltan_campos").innerHTML = alerta;

  } else if (numero_de_cuenta.length >= 1 && transferencia || calle.length >= 1 && cvc.length >= 1 && vencimiento.length >= 1 && credito) {
    alerta = ``;
    document.getElementById("alerta_faltan_campos").innerHTML = alerta;

  }
}

function compra_exitosa(){
  const calle = document.getElementById("Calle_credito").value.length
  const cvc = document.getElementById("cvc").value.length
  const vencimiento = document.getElementById("Vencimiento").value.length
  const numero_de_cuenta = document.getElementById("numero_de_cuenta").value.length
  const credito = document.getElementById("credito").checked
  const transferencia = document.getElementById("Transferencia").checked
  const cantidad = document.getElementById("0").value.length
  const premium = document.getElementById("premium").checked
  const express = document.getElementById("express").checked
  const stand = document.getElementById("standard").checked

  if (premium || express || stand){
    if(calle >= 1 && cvc >= 1 && vencimiento >= 1 && credito || numero_de_cuenta >= 1 && transferencia){
      if(cantidad >= 1){
        document.getElementById("boton_compra_exitosa").click()
      }else{
        document.getElementById("finalizar_compra_boton_real").click()
      }
    }else{
      document.getElementById("finalizar_compra_boton_real").click()
    }
  }else{
    document.getElementById("finalizar_compra_boton_real").click()
  }
}

const primerNombre = document.getElementById("inputNombre1")
const segundoNombre = document.getElementById("inputNombre2")
const primerApellido = document.getElementById("inputApellido1")
const segundoApellido = document.getElementById("inputApellido2")
const email = document.getElementById("inputemail")
const telefono = document.getElementById("inputtelefono")

function logeado() {
    if (localStorage.getItem(`log`) == null) {
        window.location.href = "login.html"
    } else {
        document.getElementById("Usuarioindex").innerHTML = localStorage.getItem(`usuario`)
    }
};
logeado();



function comprobar_campos() {
    const primerNombre = document.getElementById("inputNombre1")
    const primerApellido = document.getElementById("inputApellido1")
    const email = document.getElementById("inputemail")

    if (primerNombre.value.length > 0 && primerApellido.value.length > 0 && email.value.length) {
        guardar_cambios_perfil()
        document.getElementById("boton_cambios_guardados").click()
    } else {
        document.getElementById("boton_error").click()
    }
}

//Funcion bootsrap falta de campos 
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
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

function guardar_cambios_perfil() {
    const primerNombre = document.getElementById("inputNombre1")
    const segundoNombre = document.getElementById("inputNombre2")
    const primerApellido = document.getElementById("inputApellido1")
    const segundoApellido = document.getElementById("inputApellido2")
    const email = document.getElementById("inputemail")
    const telefono = document.getElementById("inputtelefono")

    localStorage.setItem(`usuario`, email.value);

    const email_activo = localStorage.getItem(`usuario`)


    let usuario = {
        "nombre1": primerNombre.value,
        "nombre2": segundoNombre.value,
        "apellido1": primerApellido.value,
        "apellido2": segundoApellido.value,
        "email": email_activo,
        "telefono": telefono.value,
    }
    let usuarioJson = JSON.stringify(usuario);
    localStorage.setItem(email.value, usuarioJson)


    logeado();
}

function formulario() {
    const email_activo = localStorage.getItem(`usuario`)

    

        let usuario = localStorage.getItem(email_activo)
        const usuarioactual = JSON.parse(usuario)
        

        formulario = `
        <div>
    <label for="inputNombre1">Primer Nombre*</label>
    <input type="text" class="form-control" value="${usuarioactual.nombre1}" id="inputNombre1" required>
      <div class="invalid-feedback">
      Ingrese un nombre
      </div>
    </div>
   
    <label for="inputNombre2">Segundo Nombre</label>
    <input type="text" class="form-control" value="${usuarioactual.nombre2}" id="inputNombre2">
         
    
    <div>
    <label for="inputApellido1">Primer apellido*</label>
    <input type="text" class="form-control" value="${usuarioactual.apellido1}" id="inputApellido1" required>
      <div class="invalid-feedback">
      Ingrese un apellido 
      </div>
    </div>
 
    <label for="inputApellido2">Segundo Apellido</label>
    <input type="text" class="form-control" value="${usuarioactual.apellido2}" id="inputApellido2">

    <div>
    <label for="inputemail">E-mail*</label>
    <input type="email" class="form-control" value="${usuarioactual.email}" id="inputemail" required>
      <div class="invalid-feedback">
      Ingrese un email valido
      </div>
    </div>

    <label for="inputtelefono">Teléfono de contacto*</label required>
    <input type="number" class="form-control" value="${usuarioactual.telefono}" id="inputtelefono">
    `
        document.getElementById("formulario").innerHTML = formulario


}
formulario()



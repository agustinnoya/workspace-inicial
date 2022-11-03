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
    } else {
        document.getElementById("boton_error").click()
    }
}
//PUEDE QUE ESTA SEA LA SOLUCION 
/*function cargar_perfil_usuario() {

    for (let i = 0; i = localstorage.length; i++) {

        const usuario = localStorage.getItem('perfil_usuario')

        let usuarioarr = JSON.parse(usuario)

        if ([i] == localStorage.getItem("id_usuario"[i])) {

        }

    }
}
*/


function guardar_cambios_perfil() {
    const primerNombre = document.getElementById("inputNombre1")
    const segundoNombre = document.getElementById("inputNombre2")
    const primerApellido = document.getElementById("inputApellido1")
    const segundoApellido = document.getElementById("inputApellido2")
    const email = document.getElementById("inputemail")
    const telefono = document.getElementById("inputtelefono")




    // localStorage.setItem(`primerNombre`, primerNombre.value);
    // localStorage.setItem(`segundoNombre`, segundoNombre.value);
    // localStorage.setItem(`primerApellido`, primerApellido.value);
    //  localStorage.setItem(`segundoApellido`, segundoApellido.value);
    localStorage.setItem(`usuario`, email.value);
    //  localStorage.setItem(`telefono`, telefono.value);

    //let primerNombre1 = primerNombre.value
    //let segundoNombre2 = segundoNombre.value
    //let primerApellido1 = primerApellido.value
    //let segundoApellido2 = segundoApellido.value
    //let usuario1 = email.value
    //let telefono1 = telefono.value


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




    // mira aca mañana 


    //let id_usuario = "[ localStorage.setItem(`primerNombre`, primerNombre.value), localStorage.setItem(`segundoNombre`, segundoNombre.value), localStorage.setItem(`primerApellido`, primerApellido.value), localStorage.setItem(`segundoApellido`, segundoApellido.value), localStorage.setItem(`usuario`, email.value), localStorage.setItem(`telefono`, telefono.value)]"

    //let id_usuario = [primerNombre1, segundoNombre2, primerApellido1, segundoApellido2, usuario1, telefono1]
    // JSON.stringify(id_usuario)
    // localStorage.setItem(`datos_del_usuario`, id_usuario);
    //  console.log(id_usuario)

    //
    logeado();
}

/*function formulario_null2(){
   usuario_perfil = localStorage.getItem(email.value, email.value)
   usuario_log = localStorage.getItem("usuario")
   
   for (let i = 0; i < localStorage.length; i++) {
    
  }

}*/
/*
function formulario_null() {
    agus = localStorage.getItem("perfil_usuario_agus")
    jap = localStorage.getItem("perfil_usuario_jap")

    const email_activo = localStorage.getItem(`usuario`)
    if (agus == null) {
        if (email_activo == "agustinn57@outlook.com") {
            let user = {
                "nombre1": "",
                "nombre2": "",
                "apellido1": "",
                "apellido2": "",
                "email": email_activo,
                "telefono": "",
            }
            let usuarioJson = JSON.stringify(usuario);
            localStorage.setItem("perfil_usuario_agus", usuarioJson)
        }
    } else if (jap == null) {
        if (email_activo == "jap@gmail.com") {
            let user = {
                "nombre1": "",
                "nombre2": "",
                "apellido1": "",
                "apellido2": "",
                "email": email_activo,
                "telefono": "",
            }
            let usuarioJson = JSON.stringify(usuario);
            localStorage.setItem("perfil_usuario_jap", usuarioJson)
        }
    }




}
*/




function nombre1_formulario() {
    const email_activo = localStorage.getItem(`usuario`)

    

        let usuario = localStorage.getItem(email_activo)
        const usuarioarr = JSON.parse(usuario)
        

        formulario = `
    <label for="inputNombre1">Primer Nombre*</label>
    <input type="text" class="form-control" value="${usuarioarr.nombre1}" id="inputNombre1" required>
   
    <label for="inputNombre2">Segundo Nombre</label>
    <input type="text" class="form-control" value="${usuarioarr.nombre2}" id="inputNombre2">
             
    <label for="inputApellido1">Primer apellido*</label>
    <input type="text" class="form-control" value="${usuarioarr.apellido1}" id="inputApellido1" required>
       
    <label for="inputApellido2">Segundo Apellido</label>
    <input type="text" class="form-control" value="${usuarioarr.apellido2}" id="inputApellido2">

    <label for="inputemail">E-mail</label>
    <input type="email" class="form-control" value="${usuarioarr.email}" id="inputemail">

    <label for="inputtelefono">Teléfono de contacto*</label required>
    <input type="number" class="form-control" value="${usuarioarr.telefono}" id="inputtelefono">
    `
        document.getElementById("formulario").innerHTML = formulario


}
nombre1_formulario()



//const primerNombre = localStorage.getItem('primerNombre')
//const segundoNombre = localStorage.getItem('segundoNombre')
//const primerApellido = localStorage.getItem('primerApellido')
//const segundoApellido = localStorage.getItem('segundoApellido')
//const email = localStorage.getItem('usuario')
//const telefono = localStorage.getItem('telefono')


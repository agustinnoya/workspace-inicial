const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const button = document.getElementById("button")




//cierra sesion semana 4
function cerrarsesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('contraseña');
    localStorage.removeItem('log')

}
cerrarsesion()


button.addEventListener("click", (e) => {
    localStorage.setItem(`usuario`, email.value);
    localStorage.setItem(`contraseña`, contraseña.value);
    localStorage.setItem(`log`, true);



    //comprueba si ya existe un perfil para el usuario, si no crea uno nuevo 
    if (localStorage.getItem(email.value) == null) {

        let usuario = {
            "nombre1": "",
            "nombre2": "",
            "apellido1": "",
            "apellido2": "",
            "email": email.value,
            "telefono": "",
        }
        let usuarioJson = JSON.stringify(usuario);
        localStorage.setItem(email.value, usuarioJson)
    }

})
































//button.addEventListener("click", (e) => {
//    let usuario = {
//        email: email.value,
//        pass: contraseña.value,
//        log: true
//    }
//    localStorage.setItem(`datosusuario`, JSON.stringify(usuario));
//})


//    localStorage.removeItem(`log`);
//    localStorage.setItem(`log`, true);


//const data = {
//    email: username.value,
//    password: password.value
//};


//if (email.value.length < 0){
//    return alert("ingresa tu email");
//} else if (contraseña.value.length < 0){
//    alert("ingresa tu contraseña")
//} else{ };
//redirecciona a login automaticamente

// function login(){
//   let cargo = 1 
//   for(let i = 0; i < 1; i++){
//    setTimeout(function() {
//        location.href = "login.html";
//      }, 0010 )
//   }
//
//}



//pregunta mediante el if si existe la calve para log que se crea en login, si no se pasa por login no esta creada, por ende te envia a login 
//si estas logeado imprime el usuario en un boton en la barra superior 
    function logeado() {
        if (localStorage.getItem(`log`) == null ) {
            window.location.href = "login.html"
        }else{
            document.getElementById("Usuarioindex").innerHTML = localStorage.getItem(`usuario`)
        }
    };
    logeado();4




  
   




//document.addEventListener("DOMContentLoaded", function () {
//    const a = JSON.parse(localStorage.getItem(`datosusuario`))
//    console.log(a)
//    if (!a) {
//        window.location.href = "login.html"
//    }
//});




document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
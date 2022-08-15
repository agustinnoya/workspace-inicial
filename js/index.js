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



document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
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
        data_carrito += `<img class="imagen_carrito" src="${carrito.articles[i].image}"><p>${carrito.articles[i].name}</p><p>USD ${carrito.articles[i].unitCost}</p> <div><input type="number" name="cantidad" class="form-control cantidad_box" id="${i}" value="1"
        oninput="cantidad_cuadro()"></div>`
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

        subtotales += document.getElementById([i]).value * carrito.articles[i].unitCost
        
    }
  
    carrito_subtotal(subtotales)

}

function carrito_subtotal(subtotales) {
    console.log(subtotales)
    let data_subtotal = ""

   for(let i = 0; i < carrito.articles.length; i++){
    data_subtotal += `
        <strong><p>USD ${subtotales}</p></strong>
            `
   }

    document.getElementById("carrito_subtotal").innerHTML = data_subtotal;


}

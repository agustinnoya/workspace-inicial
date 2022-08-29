//const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

//fetch(url)
//    .then(response => response.json())
//    .then(data => mostrarData(data))
//    .catch(error => console.log(error))

//const mostrarData = (data) => {
//    console.log(data)
//    console.log(data.products)
//    let body = ""
//    for (let i = 0; i < data.products.length; i++) {
//        body +=  `${data.products[i].id}` 
//    }
//    document.getElementById("data").innerHTML = body
// }

let contenido;
let htmlContentToAppend = "";
let preciominimo = undefined;
let preciomaximo = undefined;

const url = "https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem(`catID`) + ".json"
console.log(url)


//cambio en entrega 2 de mi fetch(agrege let = contenido para poder filtrar el resultado)
function traer() {
    fetch(url)
        .then(response => response.json())
        .then(data => { contenido = data; return data })
        .then(data => mostrarcontenido(contenido))
        .catch(error => console.log(error))
}
traer();

//filtra minimo a maximo 
document.getElementById("minmax").addEventListener("click", () => {
    console.log(contenido.products.sort(
        (a, b) => {
            if (a.cost < b.cost) return -1;
            if (b.cost < a.cost) return 1;
            return 0;
        }
    ))
    mostrarcontenido(contenido)

});

//filtra maximo a minimo 
document.getElementById("maxmin").addEventListener("click", () => {
    console.log(contenido.products.sort(
        (a, b) => {
            if (a.cost > b.cost) return -1;
            if (b.cost > a.cost) return 1;
            return 0;
        }
    ))
    mostrarcontenido(contenido)
});

//filtra por relevancia
document.getElementById("relevancia").addEventListener("click", () => {
    console.log(contenido.products.sort(
        (a, b) => {
            if (a.soldCount > b.soldCount) return -1;
            if (b.soldCount > a.soldCount) return 1;
            return 0;
        }
    ))
    mostrarcontenido(contenido)
});

//define precio minimo y maximo y vuelve a mostrar todo 
document.getElementById("limpiarfiltro").addEventListener("click", function () {
    document.getElementById("preciominimo").value = "";
    document.getElementById("preciomaximo").value = "";

    preciominimo = undefined;
    preciomaximo = undefined;

    mostrarcontenido(contenido)
});

//precio maximo y minimo 
document.getElementById("aplicarfiltro").addEventListener("click", () => {
    preciominimo = document.getElementById("preciominimo").value;
    preciomaximo = document.getElementById("preciomaximo").value;

    mostrarcontenido(contenido)

});


//cambios en la funcion que printea en el html 
function mostrarcontenido(contenido) {

    let htmlContentToAppend = ""
5
    for (let i = 0; i < contenido.products.length; i++) {

        if (((preciominimo == undefined) || (preciominimo != undefined && contenido.products[i].cost >= preciominimo)) &&
            ((preciomaximo == undefined) || (preciomaximo != undefined && contenido.products[i].cost <= preciomaximo))) {

            htmlContentToAppend += `
            <div onclick="setCatID(${contenido.products[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${contenido.products[i].image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${contenido.products[i].name} - ${contenido.products[i].currency} ${contenido.products[i].cost} </h4>
                            <small class="text-muted">${contenido.products[i].soldCount} Vendidos</small> 
                        </div>
                        <p class="mb-1">${contenido.products[i].description}</p>
                    </div>
                </div>
            </div>
            `
        }
    }
    document.getElementById("data2").innerHTML = htmlContentToAppend;
    titulo2 = `<h2 class="centrartexto">Productos</h2>
        <p class="centrartexto">Verás aqui todos los productos de la categoria<strong> ${contenido.catName}</strong></p>`
    document.getElementById("titulo").innerHTML = titulo2

}








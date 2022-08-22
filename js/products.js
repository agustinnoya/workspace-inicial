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


//crea una variable vacia para poder incertar cosas en ella 
    let htmlContentToAppend = "";

    const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"
    console.log("holaaa") 
    
    fetch(url)
        .then((response) => response.json())   //
        //.then((data) => console.log(data))
        .then((data) => mostrarData(data))   //
        .catch(error => console.log(error)) //si existe algun error lo imprime en la consola

    const mostrarData = (data) => {
        console.log(data)
        console.log(data.products)
        //mediante el for se extraen los valores de cada campo y se coloca en el codigo con el respectivo estilo, con el += se agrega al contenido 
        for (let i = 0; i < data.products.length; i++) {
            htmlContentToAppend += `
            <div onclick="setCatID(${data.products[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${data.products[i].image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${data.products[i].name} - ${data.products[i].currency} ${data.products[i].cost} </h4>
                            <small class="text-muted">${data.products[i].soldCount} artículos</small> 
                        </div>
                        <p class="mb-1">${data.products[i].description}</p>
                    </div>
                </div>
            </div>
            `
            
        }
        //inserta en products id data el contenido de arriba que se guardo en htmlconttoappend
        document.getElementById("data").innerHTML = htmlContentToAppend; 

        titulo2 = `<h2 class="centrartexto">Productos</h2>
        <p class="centrartexto">Verás aqui todos los productos de la categoria<strong> Autos</strong></p>`
        document.getElementById("titulo").innerHTML = titulo2
       // document.getElementById("data").innerHTML = body
    }
    
       //     document.getElementById("data").innerHTML = htmlContentToAppend;
           

 



    




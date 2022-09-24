const url_producto = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem(`catIDobj`) + ".json";
console.log(url_producto)
const url_comentario = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem(`catIDobj`) + ".json";
console.log(url_comentario)
document.getElementById("Usuarioindex").innerHTML = localStorage.getItem(`usuario`)
let producto;
let comentarios;

//semana4 recarga product-info y carga el prducto con una nueva id de productos recomendados
function productosrelacionados(id) {
  localStorage.setItem("catIDobj", id);
  window.location = "product-info.html"
}


function traer_productor() {
  fetch(url_producto)
    .then(response => response.json())
    .then(data => { console.log(data); return data })
    .then(data => { producto = data; return data })
    .then(producto => { console.log("producto dentro del fetch", producto); return producto })
    .then(producto => informacion_del_producto(producto))
    .then(producto => productos_relacionados(producto))
    .catch(error => console.log(error))
}
traer_productor();

function traer_comentario() {
  fetch(url_comentario)
    .then(response => response.json())
    .then(data => { console.log(data); return data })
    .then(data => { comentarios = data; return data })
    .then(comentarios => print_comentarios(comentarios))
    .catch(error => console.log(error))
};
traer_comentario();


function informacion_del_producto(producto) {
  console.log("dentro", producto)
  let data_productos = ""

  data_productos += `
        <div>
          <h2>${producto.name}</h2>
          <hr width="100%" color="black"/>
          <p> </p>
          <p><strong>Precio:</strong> UYU ${producto.cost}</p>
          <p><strong>Descripción: </strong>${producto.description}</p>
          <p><strong>Categoria: </strong>${producto.category}</p>
          <p><strong>Cantidad de vendidos: </strong>${producto.soldCount}</p>
          <p><strong>Imágenes ilustrativas</strong></p>
          <p> <img src="${producto.images[0]}" height = "196"> <img src="${producto.images[1]}" height = "196"> <img src="${producto.images[2]}" height = "196"> <img src="${producto.images[3]}" height = "196"></p>
        </div>
          `


  document.getElementById("info_producto").innerHTML = data_productos;
  return producto;
}

function print_comentarios() {
  let data_comentarios = ""

  for (let i = 0; i < comentarios.length; i++) {
    let estrellas = comentarios[i].score
    console.log("estrellas", estrellas)
    if (estrellas == 0) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
           <p>${comentarios[i].description}</P>
          </div>
            `
    } else if (estrellas == 1) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
   <p>${comentarios[i].description}</P>
  </div>
    `
    } else if (estrellas == 2) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
 <p>${comentarios[i].description}</P>
</div>
  `
    } else if (estrellas == 3) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
 <p>${comentarios[i].description}</P>
</div>
  `
    } else if (estrellas == 4) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span></p>
 <p>${comentarios[i].description}</P>
</div>
  `
    } else if (estrellas == 5) {
      data_comentarios += `
<div class="list-group-item">
<p><strong>${comentarios[i].user}</strong> - ${comentarios[i].dateTime} - ${comentarios[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span></p>
 <p>${comentarios[i].description}</P>
</div>
  `
    }

  }

  document.getElementById("comentarios").innerHTML = data_comentarios;
}

//productos relacionados semana 4
function productos_relacionados(producto) {
  console.log("dentro2", producto)
  let productosrelacionados = ""
  for (let i = 0; i < producto.relatedProducts.length; i++) {
    productosrelacionados += `
    <div onclick="productosrelacionados(${producto.relatedProducts[i].id})" class="cursor-active espaciado">
        <div>
            <div align="center">
                <img src="${producto.relatedProducts[i].image}"class="img-thumbnail" style= width:300px height:300px>
            </div>
            <div>
                <p class="mb-1, Alinear_Felx">${producto.relatedProducts[i].name}</p>
            </div>
        </div>
    </div>
    `

  }
  document.getElementById("relacionadosproductos").innerHTML = productosrelacionados;

}



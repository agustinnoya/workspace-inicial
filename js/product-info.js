const url_producto = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem(`catIDobj`) + ".json";
console.log(url_producto)
const url_comentario = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem(`catIDobj`) + ".json";
console.log(url_comentario)
document.getElementById("Usuarioindex").innerHTML = localStorage.getItem(`usuario`)
let producto;
let comentarios;



function traer_productor() {
  fetch(url_producto)
    .then(response => response.json())
    .then(data => { console.log(data); return data })
    .then(data => { producto = data; return data })
    .then(producto => { console.log("producto dentro del fetch", producto); return producto })
    .then(producto => informacion_del_producto(producto))
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


/*
//desafiate 
document.getElementById("enviarcomentario").addEventListener("click", () => {
  calificacion = document.getElementById("estrellitasnuevo")
  opinion = document.getElementById("tuopinionid")
  console.log(opinion)
 });
*/

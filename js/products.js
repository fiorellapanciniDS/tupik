let respuesta = '[ { "nombre": "montaña", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen1.jpg", "tamaño": "376x249", "id": 1 }, { "nombre": "atardecer", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen2.jpg", "tamaño": "376x249", "id": 2 }, { "nombre": "puente", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen3.jpg", "tamaño": "376x249", "id": 3 }, { "nombre": "lago", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen4.jpg", "tamaño": "376x249", "id": 4 }, { "nombre": "nieve", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen5.jpg", "tamaño": "376x249", "id": 5 }, { "nombre": "noche", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen6.jpg", "tamaño": "376x249", "id": 6 } ]';

procesarProductos = function (data) {
    let miDiv = document.querySelector("#div-01");
    var productos = JSON.parse(data.response);
    productos.forEach((element) => {
      miDiv.innerHTML += `<div class="card">
        <img src="${element.img}" style="width:100%">
        <h2>Nombre: <span>${element.nombre}</span></h2>
        <h3>Categoria: ${element.categoria}</h3>
        <h4>PRECIO : $<span>${element.precio}</span></h4>
        <h5>Tamaño de imagen: ${element.tamaño}</h5>
        <button class="btn-buy" data-id="${element.id}">AGREGAR</button>
      </div>
      `;
    });

    let btnBuy = document.querySelectorAll(".btn-buy");
      
    btnBuy.forEach((element) => {
      element.addEventListener("click", (event) => {
        enviarAlCarrito(event.target.parentElement);
      });
    });

  };


callApi=function() {
  $.ajax({
    type: 'POST',  
    dataType: "json",
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: { 
      response:respuesta
    },
    success: function(data){
      procesarProductos(data)
    }
  });
};

$(document).ready(callApi);


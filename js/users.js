
$(document).ready(function () {
    //Declaramos la url del API
    const APIURL = "https://jsonplaceholder.typicode.com/posts";
    //Declaramos la información a enviar
    const infoPost = { producto: "Ana", profesion: "Programadora" };
    //Agregamos un botón con jQuery
    $("body").prepend('<button id="btn1">ENVIAR API</button>');
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => {
      $.ajax({
        method: "POST",
        url: APIURL,
        data: infoPost,
        success: function (respuesta) {
          $("body").prepend(`<div>${respuesta.nombre}</div>`);
        },
        error: function (error) {
            console.log(error)
        }
      });
  
      // $.post(API_URL, infoPost, function (respuesta) {
      //    $("body").prepend(`<div>${respuesta.nombre}</div>`);
      //})
    });
  });

/* 
procesarProductos = function (data) {
    let miDiv = document.querySelector("#gola");
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
  };
$(document).ready(function() {
  $.ajax({
  type: 'POST',  
  dataType: "json",
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: { 
    response:'[ { "nombre": "montaña", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen1.jpg", "tamaño": "376x249", "id": 1 }, { "nombre": "atardecer", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen2.jpg", "tamaño": "376x249", "id": 2 }, { "nombre": "puente", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen3.jpg", "tamaño": "376x249", "id": 3 }, { "nombre": "lago", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen4.jpg", "tamaño": "376x249", "id": 4 }, { "nombre": "nieve", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen5.jpg", "tamaño": "376x249", "id": 5 }, { "nombre": "noche", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen6.jpg", "tamaño": "376x249", "id": 6 } ]'
       },
  success: function(data){
    procesarProductos(data)
  }});
  })
;

let respuesta = '[ { "nombre": "montaña", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen1.jpg", "tamaño": "376x249", "id": 1 }, { "nombre": "atardecer", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen2.jpg", "tamaño": "376x249", "id": 2 }, { "nombre": "puente", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen3.jpg", "tamaño": "376x249", "id": 3 }, { "nombre": "lago", "precio": 120, "categoria": "paisajes", "img": "./assets/imagen4.jpg", "tamaño": "376x249", "id": 4 }, { "nombre": "nieve", "precio": 100, "categoria": "paisajes", "img": "./assets/imagen5.jpg", "tamaño": "376x249", "id": 5 }, { "nombre": "noche", "precio": 150, "categoria": "paisajes", "img": "./assets/imagen6.jpg", "tamaño": "376x249", "id": 6 } ]';

procesarProductos = function (data) {
    let miDiv = document.querySelector("#gola");
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
  };


callApi = function() {
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
});

       */
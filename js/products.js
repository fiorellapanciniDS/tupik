let getproductsURL = "/data/products.json"

procesarProductos = function (data) {
    let miDiv = document.querySelector("#div-01");
    data.forEach((element) => {
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

  getProducts=function() {
    $.getJSON(getproductsURL, function (respuesta, estado) {
      if(estado === "success"){
        procesarProductos(respuesta)
      }
      });
  };

$(document).ready(getProducts);


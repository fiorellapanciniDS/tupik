
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
/*   let miDiv = document.querySelector("#div-01"); */
  let sidebar = document.querySelector(".sidebar1");
  
  const enviarAlCarrito = (datosProductos) => {
    let productoAlCarrito = {
      imagen: datosProductos.querySelector("img").src,
      nombre: datosProductos.querySelector("h2 span").textContent,
      precio: Number(
        datosProductos.querySelector("h4 span").textContent
      ),
      id: Number(datosProductos.querySelector("button").getAttribute("data-id")),
    };
  
    let existeProducto = carrito.some(
      (element) => element.id === productoAlCarrito.id
    );
  
    if (existeProducto) {
      carrito = carrito.map((element) => {
        if (element.id === productoAlCarrito.id) {
          return element;
        }
      });
    } else {
      carrito.push(productoAlCarrito);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  const inyectarHTMLcarrito = () => {
    sidebar.innerHTML = "";
    carrito.forEach((element) => {
      sidebar.innerHTML += `<div>
      <h2>Mis compras</h2> 
      <h3>${element.nombre}</h3>
      <p>$${element.precio}</p>
      <img src="${element.imagen}" style="width:50%">
      <button class="btn-borrar" data-id=${element.id}> BORRAR </button>
      <hr>
      </div>`;
    });
    let divTotal = document.createElement("div");
    let miTotal = totalDelCarrito();
    divTotal.innerHTML = `
    <h2>Mis compras</h2> 
    <p>TOTAL: ${miTotal}<p>`;
    sidebar.appendChild(divTotal);
  };

  
  const borrarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
    carrito = carrito.filter((element) => element.id != idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  sidebar.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-menos")) {
      restarProducto(event);
    }
    if (event.target.classList.contains("btn-borrar")) {
      borrarProducto(event);
    }
  });
  
  const totalDelCarrito = () => {
    let miTotal = carrito.reduce(
      (acumulador, iterador) => acumulador + iterador.precio,
      0
    );
    return miTotal;
  };
  
  
  inyectarHTMLcarrito();
  
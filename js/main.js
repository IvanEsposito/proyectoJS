const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";

    if (totalCarrito() > 20){
        Swal.fire({
            text: 'Solo se permite seleccionar hasta 20 bebidas!',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        }) 
    }
    
    for (let producto of productos) {
        salida += `<div class="col-md-3 mb-3 cajaproductos">
            <div class="card text-center border border-0 ">
                <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-primary" onClick="agregarAlCarrito(${producto.id});">Agregar al Carrito</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();

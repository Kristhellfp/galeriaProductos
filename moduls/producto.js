function crearProducto(imgSrc, nombre, precio, descripcion) {
    
    const contenedor = document.createElement("div");
    contenedor.classList.add("producto");
    
   
    const imagen = document.createElement("img");
    imagen.src = imgSrc;
    imagen.alt = nombre;
    imagen.classList.add("producto-img");
    
   
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    titulo.classList.add("producto-nombre");
    
    
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    precioElemento.classList.add("producto-precio");
    
   
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    descripcionElemento.classList.add("producto-descripcion");
    
    
    contenedor.appendChild(imagen);
    contenedor.appendChild(titulo);
    contenedor.appendChild(precioElemento);
    contenedor.appendChild(descripcionElemento);
    
    return contenedor;
}

export { crearProducto }
const section = document.getElementById("mostrarProducto");
const producto = document.getElementById("CantidadProducto");
let precioTotal = 0;
fetch('../Json/producto.json') // * ubicamos nuestro archivo Json
.then(response => response.json())//*Pasamos los productos a objeto
.then(producto => { // * Visualizamos
    producto.forEach((elemento, indice) => {
        let cantidad = 0; // * sirve para dar las unidades del producto 
        let precio = 0;
        switch(indice){
            case 0: //Verificamos si existe un dato con la id 
                localStorage.getItem("pastel") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("pastel")), cantidad = cantidad.length, precio += cantidad * elemento.precio);
            break;
            case 1: //Verificamos si existe un dato con la id 
                localStorage.getItem("Tarta") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("Tarta")), cantidad = cantidad.length), precio += cantidad * elemento.precio;
            break;
            case 2: //Verificamos si existe un dato con la id 
                localStorage.getItem("cupcake") == null ? cantidad = 0 : (cantidad = JSON.parse(localStorage.getItem("cupcake")), cantidad = cantidad.length, precio += cantidad * elemento.precio);
            break;
            case 3: //Verificamos si existe un dato con la id 
                localStorage.getItem("desayunos") == null ? cantidad = 0 : (cantidad = localStorage.getItem("desayunos"), precio += cantidad * elemento.precio);
            break;
            case 4: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice, false); 
                cantidad != 0 && (precio += cantidad * elemento.precio);
            break;
            case 5: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice, false);
                cantidad != 0 && (precio += cantidad * elemento.precio);
            break;
            case 6: //Verificamos si existe un dato con la id 
                cantidad = validarLugar(indice, false);
                cantidad != 0 && (precio += cantidad * elemento.precio);
            break;
        }
        section.innerHTML += `
        <div class="col d-flex justify-content-sm-center" id="producto${indice}">
            <div>
                <h3 class="p-0 textCentrado">${elemento.nombre}</h3>
                <div class="d-flex colProduct">
                    <img src="../Fotos/${elemento.img}" alt="imgProducto" width="80" height="80">
                    <div class="d-flex">
                        <div class="row m-3 text-center">
                            <p>Precio</p>
                            <p id="precioArticulo${indice}">$${elemento.precio}</p>
                        </div>
                        <div class="row m-3 text-center">
                            <p>Unidades</p>
                            <input class="m-auto text-center" type="number" disabled="disabled" value="${cantidad}" id="clave${indice}" style= "width:50px"></input>
                        </div>
                    </div>
                    <div class="row m-3 text-center">
                        <p>Precio por unidades</p>
                        <p id="precio${indice}">${cantidad*elemento.precio}</p>
                    </div>
                    <div class="m-auto">
                        <button class="btn btn-danger btnEliminar" id="btn${indice}" onClick="GFG_click(this.id)">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        //si precio es distinto a cero, entonces precioTotal suma el precio de cada articulo
        precio !== 0 && (precioTotal += precio);
        visualizarPrecioTotal(precioTotal)
    });
})

/* Mostrar el valor total a pagar */
function visualizarPrecioTotal(num){ //? Pasamos como parametro el precio total
    const scPrecio = document.getElementById("sectionPrecio");
    scPrecio.innerHTML = //Mostramos desde dom
    `
    <div class="m-5">
        <hr class="w-50 m-auto">
        <div class="m-5 d-flex justify-content-sm-center text-center">
            <div>
                <h5>Precio Total</h5>
                <input class="text-center w-50" type="number" disabled="disabled" id="preciototal" value="${num}">
                <br>
                <button class="btn btn-success" onClick="confirmar()" type="submit">Confirmar Comprar</button>
            </div>
        </div>
    </div>
    `;
    //guardamos el precio en el localStorage
    localStorage.setItem("PrecioTotal", num);
}

//TODO: Mostramos un mensaje cuando el cliente confirma sus productos 
function confirmar(){
    if(precioTotal > 0 ){
        /*Redirecionamos al usuario a pedidos.html*/
        Swal.fire({
            title: 'Genial!',
            text: 'Para confimar tu compra necesitamos que completes los siguientes datos',
            icon: 'success',
            confirmButtonText: 'Ok',
        }).then((result) =>{
            if(result.isConfirmed){
                document.location.href = "../seccion/pedido.html";
            }
        })
    }
}

// ? Funcion para eliminar productos
// Todo : Sirve para obtener la id e indices del producto especifico
function GFG_click(clicked) {
    /* Obtenemos la id del btn */ 
    let ids = clicked; // ? Cuando le damos click a un boton obtenemos la id
    //? Lo importante es poder obtener el indice que se le asigno al boton
    let indice = ids.substring(ids.length, ids.length-1); //? obtenemos la ultima letra
    /* Actualización de precio total*/
    const articuloPrecio = document.getElementById(`precioArticulo${indice}`);
    const unidades = document.getElementById(`clave${indice}`); //? Obtenemos el valor del input de Unidades
    const total = document.getElementById("preciototal");
    //? Obtenemos el texto y le sacamos el signo pesos
    let artPrecio = articuloPrecio.textContent.substring(1, articuloPrecio.textContent.length);
    precioTotal = precioTotal - (parseInt(artPrecio) * unidades.value);
    /* Cambio de valores */
    total.value = precioTotal; //! reducimos el precio total
    producto.value = parseInt(localStorage.getItem("productos")) - unidades.value; //! Cambiamos el valor de producto
    document.getElementById(`precio${indice}`).innerText = 0; //! Cambiamos el valor del precio
    unidades.value = 0; //! le cambiamos el valor por cero y lo mismo con el parrafo Precio
    vaciarMemoria(indice);
    /* Actualizamos el dato */
    localStorage.setItem("productos", producto.value);
    localStorage.setItem("PrecioTotal", total.value);
} 

//? Vaciamos los datos que tenemos en el localStorage
function vaciarMemoria(ind){
    switch (parseInt(ind)) {
        case 0: //borra los datos segun la id
            localStorage.removeItem("pastel"); 
        break;
        case 1: //borra los datos segun la id
            localStorage.removeItem("Tarta"); 
        break;
        case 2: //borra los datos segun la id
            localStorage.removeItem("cupcake"); 
        break;
        case 3: //borra los datos segun la id
            localStorage.removeItem("desayunos"); 
        break;
        case 4:
            validarLugar(parseInt(ind), true);
        break;
        case 5:
            validarLugar(parseInt(ind), true);
        break;
        case 6:
            validarLugar(parseInt(ind), true);
        break;
    }
}
function validarLugar(indice, estado){
    //Obtenemos el array de PorcionPastel
    let pedidoPastel = JSON.parse(localStorage.getItem("porcionPastel"));
    let u = 0;
    if(pedidoPastel != null){ //Preguntamos si el array esta vacio
        if(!estado){ //Si es falso su funcionamiento es sumar la cantidad de producto
            //Recorremos el array de ProcionPastel
            pedidoPastel.forEach((element)=>{ 
                //Validamos la clave con el parametro indice. 
                //Incrementamos u según la cantidad de producto que se pidio 
                element.clave === indice && (u = u + parseInt(element.unidad));
            })
            
        }
        else{ //Pero si es verdadero su funcionamiento es eliminar el producto seleccionado
            pedidoPastel.forEach((element, i)=>{ //Recoremos array
                //Validamos la clave con el parametro indice
                //Borramos según el indice un espacio
                element.clave === indice && pedidoPastel.splice(i, 1);
            })
            //Guardamos el array actualizado
            localStorage.setItem("porcionPastel", JSON.stringify(pedidoPastel));
        }
    }
    return u;
}

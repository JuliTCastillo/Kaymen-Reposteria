const formPedido = document.getElementById("frmPedido"); //obtenemos las propiedades de form
const mensaje = document.getElementById("scPedido"); //obtenemos las propiedades del div
const producto = document.getElementById("CantidadProducto");

let mensajePedido = "Quiero un cupcake "; 

let cupcake = [];

formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    /* Obtenemos los datos de los controles */
    let crema = document.getElementById("Crema").value;
    let bizcochuelo = document.getElementById("Bizcochuelo").value;
    let decoracion = document.getElementById("Decoracion").value;
    
    /* Validamos que el dato no este vacio */
    bizcochuelo != "" && (mensajePedido += ` de ${bizcochuelo}`);
    crema != "" && (mensajePedido += ` con crema de ${crema}`);
    decoracion != "" && (mensajePedido += ` y una decoración con ${decoracion}`);
    
    /* Guardamos el pedido en un array */
    cupcake.push(mensajePedido)
    /*Guardamos en el localStorage*/
    localStorage.setItem("cupcake", cupcake);
    /* Obtenemos la cantidad de producto y le sumamos uno */
    producto.value = parseInt(localStorage.getItem("productos")) + 1;
    /* Actualizamos el dato */
    localStorage.setItem("productos", producto.value);
    /*Redirecionamos al usuario a pedidos.html*/
    // document.location.href = "../seccion/pedido.html";
});


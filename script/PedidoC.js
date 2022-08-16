const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
let mensajePedido = "Quiero un cupcake "; 
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
    /*Guardamos la seleccion en el localStorage*/
    localStorage.setItem("pedido", mensajePedido);
    /*Redirecionamos al usuario a pedidos.html*/
    document.location.href = "../seccion/pedido.html";
});


const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
let mensajePedido = "Quiero un "; 
formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    /* Obtenemos los datos de los controles */
    let crema = document.getElementById("Crema").value;
    let bizcochuelo = document.getElementById("Bizcochuelo").value;
    let decoracion = document.getElementById("Decoracion").value;
    mensajePedido = mensajePedido + "cupcake ";
    /* Validamos que el dato no este vacio */
    if(bizcochuelo != ""){
        mensajePedido = mensajePedido + " de " + bizcochuelo;
    }
    if(crema != ""){
        mensajePedido = mensajePedido + " con crema de " + crema;
    }
    if(decoracion != ""){
        mensajePedido = mensajePedido + " y una decoración con " + decoracion;
    }
    localStorage.setItem("pedido", mensajePedido);
    localStorage.setItem("seleccion", "Cupcake");
    document.location.href = "../seccion/pedido.html";
});


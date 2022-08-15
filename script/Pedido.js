const formPedido = document.getElementById("frmPedido"); //obtenemos la id de form
const mensaje = document.getElementById("scPedido"); //obtenemos la id del div
let mensajePedido = "Quiero un "; 

formPedido.addEventListener('submit', (event)=>{ //añadimos un evento al formulario
    event.preventDefault(); //Sacamos la carga
    /* Obtenemos los datos de los controles */
    let crema = document.getElementById("Crema").value;
    let bizcochuelo = document.getElementById("Bizcochuelo").value;
    let decoracion = document.getElementById("Decoracion").value;
    let relleno = document.getElementById("Relleno").value;
    mensajePedido = mensajePedido + "paste"
    /* Validamos que el dato no este vacio */
    if(bizcochuelo != ""){
        mensajePedido = mensajePedido + " de " + bizcochuelo;
        // localStorage.setItem("bizcochuelo", bizcochuelo);
    }
    if(crema != ""){
        mensajePedido = mensajePedido + " con crema de " + crema;
        // localStorage.setItem("crema", crema);
    }
    if(relleno != ""){
        switch(relleno){
            case "DDL":
                mensajePedido = mensajePedido + " con un relleno de dulce de leche";
                break;
            case "CCD":
                mensajePedido = mensajePedido + " con un relleno de crema con durazno";
                break;
            case "Otro":
                mensajePedido = mensajePedido + " con "+ relleno + " relleno";
                break;
        }
        // localStorage.setItem("relleno", relleno);
    }
    if(decoracion != ""){
        mensajePedido = mensajePedido + " y una decoración con " + decoracion;
        // localStorage.setItem("decoracion", decoracion);
    }
    localStorage.setItem("pedido", mensajePedido);
    document.location.href = "../seccion/pedido.html";
});


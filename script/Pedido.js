
const formPedido = document.getElementById("frmPedido"); 
const mensaje = document.getElementById("scPedido");
let mensajePedido = "Quiero un ";
formPedido.addEventListener('submit', (event)=>{
    event.preventDefault();
    let crema = document.getElementById("Crema").value;
    let bizcochuelo = document.getElementById("Bizcochuelo").value;
    let decoracion = document.getElementById("Decoracion").value;
    let relleno = document.getElementById("Relleno").value;
    mensajePedido = mensajePedido + "paste"

    if(bizcochuelo != ""){
        mensajePedido = mensajePedido + " de " + bizcochuelo;
    }
    if(crema != ""){
        mensajePedido = mensajePedido + " con crema de " + crema;
        
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
    }
    if(decoracion != ""){
        mensajePedido = mensajePedido + " y una decoración con " + decoracion;
    }
    mensaje.innerHTML = `<div class="divpedido"><p>${mensajePedido}</p></div>`;
    mensajePedido = "Quiero un ";
});


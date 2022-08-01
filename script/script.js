const btnPedido = document.getElementById("btnPedido");

btnPedido.addEventListener('click', ()=>{
    console.log("se realizo un pedido");
})

let pedidos = []; // Array de pedidos
const formPedido = document.getElementById("frmPedido"); 

formPedido.addEventListener('submit', (event) => { //Evento del formulario
    event.preventDefault(); //Le sacamos el default
    /*obtenemos los datos del formulario*/
    let seleccioPedido = document.getElementById("seleccionPedido").value;
    let sabor = document.getElementById("seleccionSabor").value;
    let unidades = document.getElementById("introducirCantidad").value;

    //llamamos al constructor de la clase
    const pedido = new Pedido(seleccioPedido, sabor, unidades); 

    pedidos.push(pedido); //Agregamos en el array
    console.log(pedidos); //Visualizamos el array por consola
    formPedido.reset(); //reseteamos el formulario
});

function Pedido(seleccion, sabor, unidades){
    this.seleccionPedido = seleccion;
    this.saborPedido = sabor;
    this.unidadPedido = unidades;
}
/* Inicializamos carrito */
const Producto = document.getElementById("CantidadProducto");
/*Verificamos si en el localStorage existe un item Productos */
let u = localStorage.getItem("productos"); 
// ! Consultamos, si U es igual que null(quiere dicer que nunca se guardo un dato) 
if(u == null){
    /* Guardamos el dado */
    localStorage.setItem("productos", 0);
    Producto.value = 0;
} /* En el caso que haya un dato */
else{
    /* Obtenemos el dato y lo guardamos en el carrito */
    Producto.value = localStorage.getItem("productos");
}

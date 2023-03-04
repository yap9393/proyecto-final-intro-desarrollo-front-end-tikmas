//MODO OSCURO
function modoClaroOscuro() {
    var elementBody = document.body;
    elementBody.classList.toggle("modoClaroOscuro")

}
 
//VOLVER ARRIBA
const toTop=()=>window.scrollTo({top:0, behavior:"smooth"});


//FECHA DE HOY
  function mostrarFecha() {
    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth() + 1; 
    var anio = d.getFullYear();
    document.write(dia + "-" + mes + "-" + anio);
  }

//IMPRESION Y DESCARGA SOLO POSIBLE EN MODO CLARO
function descargarPDF(){
    var elementBody = document.body;
if (elementBody.classList.contains('modoClaroOscuro')){
    alert('Se recomienda descargar e imprimir el sitio en modo claro')
    } else{
        window.print()
    }
}

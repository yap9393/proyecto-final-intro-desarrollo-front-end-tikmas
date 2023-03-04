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
    var mes = d.getMonth() + 1; //months are zero based
    var anio = d.getFullYear();
    document.write(dia + "-" + mes + "-" + anio);
  }


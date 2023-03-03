//modo oscuro 
function modoClaroOscuro() {
    var elementBody = document.body;
    elementBody.classList.toggle("modoClaroOscuro")
    
    // if (elementBody.classList=="modoClaroOscuro"){
    //     document.querySelectorAll("a").forEach(a => {
    //         a.setAttribute("color", "#c0c0c0");
    //      });
    // } else{
    //     document.querySelectorAll("a").forEach(a => {
    //         a.setAttribute("color", "#000000");
        
    //      });
    // }

}
 
   
 
//VOLVER ARRIBA
const toTop=()=>window.scrollTo({top:0, behavior:"smooth"});

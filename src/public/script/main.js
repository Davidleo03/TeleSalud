const form = document.getElementById("formulario");
console.log("Hola")

form.addEventListener("submit", (e) => {
   
    Swal.fire({
        title: "¡Comentario Enviado!",
        text : "Gracias Por Contactarnos",
        icon : "success",
        confirmButtonText : "ok"
    })
})
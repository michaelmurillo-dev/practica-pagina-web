// Esperamos a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function () {

  // Buscamos el botón y el espacio donde irá el mensaje
  const boton = document.getElementById("btnBienvenida");
  const mensaje = document.getElementById("mensajeBienvenida");

  // Cuando se presione el botón, mostramos el mensaje de bienvenida
  boton.addEventListener("click", function () {
    mensaje.textContent = "¡Bienvenido a mi página web! Gracias por visitarme.";
  });

});

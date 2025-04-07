const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje-enviado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = new FormData(formulario);
  const action = formulario.action;

  fetch(action, {
    method: "POST",
    body: datos,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      mensaje.style.display = "block";
      formulario.reset();
    } else {
      alert("Hubo un problema. Intenta de nuevo más tarde.");
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      destino.scrollIntoView({ behavior: "smooth" });
    });
  });

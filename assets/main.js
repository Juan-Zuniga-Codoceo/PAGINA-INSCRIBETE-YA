function registrar() {
    // Aquí iría el código para registrar al usuario en la base de datos
    mostrarMensaje();
    const boton = document.getElementsByTagName("button")[0];
    boton.innerHTML = "Registrado";
    boton.disabled = true;
  }

  function mostrarMensaje() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Sumamos 1 porque los meses empiezan en 0
    const anio = fechaActual.getFullYear();
    const mensaje = `¡Gracias por inscribirte! Tu registro se realizó con éxito el día ${dia}/${mes}/${anio}.`;
    const cajaInformativa = document.getElementById("caja-informativa");
    cajaInformativa.innerHTML = mensaje;
  }

  function mostrarFecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const fecha = `${dia}/${mes}/${anio}.`;
    const fechaAbajoDiv = document.getElementById("fecha-abajo");
    fechaAbajoDiv.innerHTML = `<h2>${fecha}</h2>`;
  }

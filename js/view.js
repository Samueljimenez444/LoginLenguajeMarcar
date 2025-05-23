class view{


  // Mostrar login después de registro exitoso
  mostrarLoginTrasRegistro() {
    const registroDiv = document.getElementById("registration-section");
    const loginDiv = document.getElementById("login");

    if (registroDiv && loginDiv) {
      registroDiv.style.display = "none";
      loginDiv.style.display = "block";
    }
  }

  // Mostrar mensaje de bienvenida después de login exitoso
  mostrarBienvenidaTrasLogin() {
    const loginDiv = document.getElementById("login");
    const mensajeDiv = document.getElementById("mensaje-registro");

    if (loginDiv && mensajeDiv) {
      loginDiv.style.display = "none";
      mensajeDiv.style.display = "block";
    }
  }
}


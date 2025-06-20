class view{



  mostrarLoginTrasRegistro() {
    const registroDiv = document.getElementById("registration-section");
    const loginDiv = document.getElementById("login");

    if (registroDiv && loginDiv) {
      registroDiv.style.display = "none";
      loginDiv.style.display = "block";
    }
  } 

 
  mostrarBienvenidaTrasLogin() {
    const loginDiv = document.getElementById("login");
    const mensajeDiv = document.getElementById("mensaje-registro");

    if (loginDiv && mensajeDiv) {
      loginDiv.style.display = "none";
      mensajeDiv.style.display = "block";
    }
  }
}


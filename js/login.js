
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
        import { 
            getAuth, 
            signInWithEmailAndPassword, 
        } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAE1WyYgGZ_h3trfhrcAXLnFpMX5dgALh0",
  authDomain: "ejercicionosqllogin.firebaseapp.com",
  projectId: "ejercicionosqllogin",
  storageBucket: "ejercicionosqllogin.firebasestorage.app",
  messagingSenderId: "769904176425",
  appId: "1:769904176425:web:3dbd326aed0274c56f9b38",
  measurementId: "G-5177GLLERQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth,
    signInWithEmailAndPassword
}

const email=document.getElementById("email-login").value;
const password=document.getElementById("contraseña-login").value;

const submit=document.getElementById("submit-login");
submit.addEventListener("click", function(event){
event.preventDefault();
const email=document.getElementById("email-login").value;
const password=document.getElementById("contraseña-login").value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    
    alert("Iniciaste sesion!!");
     $("#login").hide();
   $("#mensaje-registro").show();
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error al inciar sesion con el usuario");
    
  });

  
})

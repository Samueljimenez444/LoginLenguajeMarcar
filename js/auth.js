
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
        import { 
            getAuth, 
            createUserWithEmailAndPassword
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
    createUserWithEmailAndPassword
}

const email=document.getElementById("email-registro").value;
const password=document.getElementById("contraseña-registro").value;

const submit=document.getElementById("submit");
submit.addEventListener("click", function(event){
event.preventDefault();
const email=document.getElementById("email-registro").value;
const password=document.getElementById("contraseña-registro").value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Usuario creado");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error al crear el usuario");
    // ..
  });
})

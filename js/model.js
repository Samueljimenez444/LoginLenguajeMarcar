const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

class model{

    constructor(){
        this.usuarios=[];
        this.contId=0;

    }
    create(nombre, email){
        console.log(`Creando usuario : ${nombre}, ${ciudad}`);
        let usuario = new usuario(this.contId, nombre, email);
        this.usuarios.push(usuario);
        this.contId++;

        return usuario;
    }


}
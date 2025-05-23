
class model{
    constructor(){
        this.usuarios=[];
        this.contId=0;

    }
    create(nombre, email){
        console.log(`Creando ussuario : ${nombre}, ${ciudad}`);
        let usuario = new usuario(this.contId, nombre, email);
        this.usuarios.push(usuario);
        this.contId++;
        console.log(`Usuario creado: ${usuario}`);

        return usuario;
    }


}
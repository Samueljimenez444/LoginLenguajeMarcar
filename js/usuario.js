class usuario{

constructor(nombre, email) {

    this.nombre = nombre;

    this.email = email;

}

getNombre() {
    return this.nombre; 
}

setNombre(nombre) {
    this.nombre = nombre;
}

getEmail() {
    return this.email;
}

setEmail(email){

    this.email = email; 
    
}

}
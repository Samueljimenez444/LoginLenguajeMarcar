class view{

    constructor(){
       this.mostrarLogin();
    }

    mostrarLogin(){
        let html = `
        <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" id="email" placeholder="Email" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </div>
        `;
        document.getElementById("app").innerHTML = html;
    }

}
let nombre, apellido, email, contraseña

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    email = document.getElementById('email').value
    apellido = document.getElementById('apellidos').value
    contraseña = document.getElementById('contraseña').value


    ValidarDatos(nombre, apellido, email, contraseña)
    guardarLocalStorage(nombre, apellido, email, contraseña)
    window.location.href = 'landing.html'


}

function ValidarDatos (nombre, apellido, email, contraseña) {
    if(nombre.length==0 || apellido.length==0 ||email.length==0 ||contraseña.length==0){
        swal("Error", "Espacios en blanco", "error");
    }

}

function guardarLocalStorage(nombre, apellido, email, contraseña){
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('apellido',apellido)
    localStorage.setItem('email',email)
    localStorage.setItem('contraseña',contraseña)
    window.location.href = 'landing.html';
}
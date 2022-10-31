let email, contraseña;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    email = document.getElementById('email').value
    contraseña = document.getElementById('contraseña').value
    ValidarDatos(email, contraseña)
    usuario.getElementById ('usuario').value

}

function ValidarDatos (email, contraseña) {
    if(email.length==0 ||contraseña.length==0){
        swal("Error", "Espacios en blanco");
    }
ListarDatos(email, contraseña)
}

function ListarDatos(email, contraseña){
    let emailUsu = localStorage.getItem('email')
    let contraseñaUsu = localStorage.getItem('contraseña')
alert(emailUsu, contraseñaUsu)
    if(emailUsu== email && contraseñaUsu==contraseña){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          window.location.href = 'landing.html'
    }else{
        swal("Error", "Correo o contrsaeña incorrectas", "error")
    }
}
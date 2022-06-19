// Constructor para crear usuarios.
class Usuario {
    constructor(nombre, apellido, sexo, edad, email, pass){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.edad = parseInt(edad);
        this.email = email;
        this.pass = pass;
    }
    // Metodo para cambiar contraseña de un usuario ya creado.
    cambiarPass(nuevaPass){
        this.pass = nuevaPass;
    }
    // Metodo para cambiar email de un usuario ya creado.
    cambiarEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
}
// Inicializo el array de usuarios para poder registrarlos.
const Usuarios = [];
// Pido datos de registro al usuario.
let ingresarNombre = prompt("Ingrese su nombre");
let ingresarApellido = prompt("Ingrese su apellido");
let ingresarSexo = prompt("Ingrese su sexo");
let ingresarEdad = parseInt(prompt("Ingrese su edad"));
let ingresarEmail = prompt("Ingrese su email");
let ingresarPass = prompt("Ingrese su constraseña");
// Utilizo el constructor para guardar los datos ingresados.
const usuario1 = new Usuario(ingresarNombre.toLowerCase(), ingresarApellido.toLowerCase(), ingresarSexo.toLowerCase(), ingresarEdad, ingresarEmail, ingresarPass);

// console.log(usuario1);
// Función para registrar en usuario en nuestro array.
const registrarUsuario = (arr, user) => {arr.push(user)};
// Registro al usuario en nuestro array.
registrarUsuario(Usuarios, usuario1);

console.log("Se ha registrado satisfactoriamente.");
// console.log(Usuarios);

let btnLogin = document.querySelector(".section .form #login");
console.log(btnLogin);

btnLogin.onclick = (e) => { e.preventDefault(); 
                            let email = prompt("Email?");
                            let pass = prompt("Contraseña?");
                            const resultado = Usuarios.find((user)=> user.email === email);
                            if(resultado.pass === pass){
                                console.log("Contraseña correcta, iniciando sesion...");
                            }else{
                                console.log("Contraseña incorrecta.")
                            }
                            };
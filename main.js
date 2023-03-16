const cedula = document.getElementById('cedula')
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const fechaNacimiento = document.getElementById('fecha-nacimiento');
let lista = []
class Persona{
    cedula
    nombre
    apellido
    fecha_nacimiento
    edad
   
    constructor(cedula, nombre, apellido, fecha_nacimiento,edad) {
        this.cedula = cedula
        this.nombre = nombre
        this.apellido = apellido
        this.fecha_nacimiento = fecha_nacimiento
        this.edad = edad
    }

}

function agregarPersona(){
    function calcularEdad(){
        let hoy = new Date();
        let fecha = new Date(fechaNacimiento.value)
        let edad = hoy.getFullYear() - fecha.getFullYear()
        let mes = hoy.getMonth() - fecha.getMonth()
        let dia = hoy.getDay() - fecha.getDay()
        if(mes < 0 || mes<0 && dia < 0){
            edad--
        }
        return edad
    }
    if(true){
        if(cedula.value!=''){
            console.log('ya')
        }

    }
    let persona = new Persona(cedula.value, nombre.value, apellido.value, fechaNacimiento.value,calcularEdad())
    console.log(cedula.value)
    console.log(nombre.value)
    console.log(apellido.value)
    console.log(fechaNacimiento.value)
    lista.push(persona)
    console.log(lista)
}

btn.addEventListener('click',()=>{
    agregarPersona(fechaNacimiento)
})


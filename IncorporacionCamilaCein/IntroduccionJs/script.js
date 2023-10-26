//*ejercicio1
let miNombre="Camila"
//*ejercicio2
let miApellido="Cein"
//*ejercicio3
let miEdad = 24
//*ejercicio4
let miMascota = "Kaya"
//*ejercicio5
let edadMascota= 3
//*ejercicio6
console.log (miNombre)
console.log (miApellido)
console.log (miEdad)
console.log (miMascota)
console.log(edadMascota)
//*ejercicio7
let nombreCompleto = miNombre+miApellido
//*ejercicio8
let textoPresentacion = "Hola soy" + miNombre + miApellido + "tengo" + miEdad + "años, mi mascota se llama" + miMascota + "y tiene" + edadMascota + "años"
console.log (textoPresentacion)
//*ejercicio9
let sumaEdades = (miEdad+edadMascota)
let restaEdades = (miEdad-edadMascota)
let productoEdades = (miEdad*edadMascota)
let divisionEdades = (miEdad/edadMascota)
//*ejercicio10
let alumno = {
    nombre: "Camila",
    apellido: "Cein",
    altura: "163cm",
    colorFavorito: "verde agua",
    mascota: "Kaya y Kalu",

}

console.table (alumno)
console.table (alumno.altura)
console.table (alumno.apellido)
console.table (alumno.colorFavorito)
console.table (alumno.mascota)
console.table (alumno.nombre)
//*ejercicio11
let mascota = {
    nombre: "Kaya",
    altura: "76cm",
    peso: "5kg",
    sobrenombre: "Gorda",
    personalidad: "rencorosa",

}

console.table (mascota)
console.table (mascota.sobrenombre)
console.table (mascota.nombre)
console.table (mascota.personalidad)
console.table (mascota.altura)
console.table (mascota.peso)
//*ejercicio12
const frutas = ["naranja", "frutilla", "mandarina", "kiwi", "manzana"]
console.table (frutas)
console.table (frutas [4])
console.table (frutas [3])
console.table (frutas [2])
console.table (frutas [1])
console.table (frutas [0])
//*ejercicio13
let numeroIngresado = prompt ("Ingrese aqui su edad")

let soyMayorDeEdad= 18== numeroIngresado 
console.log ("Soy mayor de edad "+numeroIngresado) 
//*ejercicio14
const numeros = [22,33,44,55,66]
console.log (numeros)
console.log (numeros[0])
console.log (numeros[1])
console.log (numeros[2])
console.log (numeros[3])
console.log (numeros[4])
//*ejercicio15
const familia = [
    {nombre : "Camila"},
    {nombre : "Ezequiel"},
    {nombre : "Kaya"},
    {nombre : "Kira"},
    {nombre : "Kalu"},
]
console.log(familia)
console.log (familia [0])
console.log (familia [1])
console.log (familia [2])
console.log (familia [3])
console.log (familia [4])

//*ejercicio16 frutilla 55 nombre kalu
let textoAleatorio = (familia[4])+" se escapo de casa, llego a una verduleria y se comió "+(numeros[3])+(frutas[1])
//*ejercicio17
let edad1 = prompt ("ingrese aqui su edad")
let edad2 = prompt ("ingrese aqui su edad")

let edadesIguales = edad1==edad2 
if (edad1==edad2){
    alert ("Mi edad es igual a la de mi compañera")
}

let soyMayor = edad1>edad2

if (soyMayor){ 
    alert ("Mi edad es mayor a la de mi compañera")
}
let soyMenor = edad1<edad2
if (soyMenor) { 
alert ("Mi edad es menor a la de mi compañera") 
}
//*ejercicio18
let edadAlSubir = prompt("ingrese aqui su edad")
let altura = prompt ("Ingrese aqui su altura")

let puedeSubir = (edadAlSubir>6, altura =>120)
if (puedeSubir){
    alert ("Puede subir a la atraccion ")
}
 
let noPuedeSubir = (edadAlSubir<=6, altura<120)
if (noPuedeSubir) {
    alert("No puede subirse a la atraccion ")
}
//*ejercicio19
let pase = prompt ("introduzca aqui su pase")
pase === "vip","normal","limitado"
let saldo = prompt ("introduzca aqui su saldo")
saldo= (<0) &&  saldo <=5000) 
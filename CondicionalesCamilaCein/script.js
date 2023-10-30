//ejercicio1
let num1 = 4
let num2 = 5

if (num1>num2) {
    console.log(num1)
}
else {
    alert(num2)
}
//ejercicio2
if(num1>num2){
    console.log (num1)
}
else if (num1===num2){
    console.log("Los numeros son iguales")
}
else{
    console.log (num2)
}
//ejercicio3
if (num1===num2) {
    console.log ("Los numeros son iguales")
}
else {
    console.log("Los numeros son diferentes")
}
//ejercicio4
let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"
if (fecha1>fecha2) {
    console.log("La fecha "+ fecha1+ " es mayor que "+ fecha2)
}
else if (fecha1<fecha2) {
    console.log("La fecha "+ fecha2 + " es mayor que " + fecha1)
}
else{
    console.log ("Las fechas son iguales")
}
//ejercicio5
fecha1 = "2018-10-7"
fecha2 = "2018-2-17"

if (fecha1>fecha2) {
    console.log("La fecha "+ fecha1+ " es mayor que "+ fecha2)
}
else if (fecha1<fecha2) {
    console.log("La fecha "+ fecha2 + " es mayor que " + fecha1)
}
//ejercicio6
let dato1 = 5
let dato2 = 7
let dato3 = 9
if (dato1>dato2&&dato1>dato3) {
console.log("El numero "+dato1+" es el mayor")
}
else if (dato2>dato1&&dato2>dato3){
    console.log ("El numero "+dato2+" es el mayor")
}
else {
    console.log ("El numero"+dato3+" es el mayor")
}
//ejercicio7
switch (prompt["ingrese un color"]) {
    case "rojo":
        console.log ("El color de la pasion")
        break;
    case "azul":
        console.log ("El color del mar")
        break;
    case "verde":
        console.log("El color de la naturaleza")
        break;
}
//ejercicio8
let ingreseNum = prompt("Ingrese un numeros del 1 al 100")
let ingreseNum1 = prompt("Ingrese un numeros del 1 al 100")
let operacion = prompt ("Ingrese una operacion")
switch (operacion){
    case "suma":
        alert(ingreseNum+ingreseNum1)
        break;
        case "resta":
            alert(ingreseNum-ingreseNum1)
        break;
        case "division":
            alert(ingreseNum/ingreseNum1)
        break;
        case "multiplicacion":
            alert(ingreseNum*ingreseNum1)
        default:
            alert("No existe esa operacion")
        break;
        }
//ejercicio9
let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.69
}
let persona2 = {
    nombre: "Marta",
    edad: 26,
    altura: 1.75
}
if (persona1.altura>persona2.altura && persona1.edad>persona2.edad){
    console.log ("Juan tiene más altura y es mayor que Marta")
}
else if (persona1.altura>persona2.altura && persona1.edad<persona2.edad){
    console.log ("Juan tiene mas altura y es menor que Marta")
}
else if (persona1.altura<persona2.altura && persona1.edad<persona2.edad){
    console.log("Juan tiene menos altura y es menor que Marta")
}
else {
    console.log("Juan tiene menos altura y es mayor que Marta")
}
//ejercicio10
let edad = prompt("Ingrese aqui su edad")
let altura = prompt("Ingrese aqui su altura en cm")
let vision = prompt("Ingrese aqui su vision del 1 al 10")

if(edad<=18&&altura<150&&vision<=8){
    console.log ("Estas capacitado para conducir")
}
else{
    console.log("No estas capacitado para conducir")
}
//ejercicio11
let años = prompt("Ingresa aqui tu edad")
if (años => 12) {
    alert("Eres un infante")
}
else if (años<12&&18<=años){
    alert("Eres un adolescente")
}
else if (años<18&&45<=años){
    alert("Eres un mayor joven")
}
else if (años<45&&años<=100){
    alert("Eres un anciano")
}
else {
    alert("¿En realidad tiene esa edad?")
}
//ejercicio12
let numeros1 = prompt("Ingrese un numero del 1 al 3")

if (numeros1>=1&&numeros<=3){
    alert(`El numero ingresado es ${numeros1}`)
    alert(`El doble del numero ingresado es ${numeros1*2}`)
    alert(`El triple del numero ingresado es ${numero1*3}`)
}
else{
    alert("Ese valor no esta permitido")
}
let numeros2 = prompt("Ingrese un numero que desee")
if(numeros2){
    alert(`El numero ingresado es ${numeros2}`)
    alert(`El doble ingresado es ${numeros2*2}`)
    alert(`El doble ingresado es ${numeros2*3}`)
}


//ejercicio13
let ingresarNombre = prompt("Ingrese aqui su nombre")
let ingresarPase = prompt("Ingrese aqui su pase")
let entrada = prompt("Tiene entrada?")

if (ingresarNombre=="Camila"||ingresarPase=="vip"){
    alert("Bienvenido")
}
else if (entrada=="si"){
    let entrada2 = prompt("Desea utilizarla?")
    if (entrada2=="si") {
        alert("Bienvenido")
    }
    else {
        alert("No puedes ingresar, adios")
    }
}
else if(ingresarNombre&&ingresarPase&&entrada){
    let comprar = prompt("Desea comprar?")
    if (comprar=="si") {
        let dinero = prompt("ingresar dinero disponible")
    }
    else if (dinero<1000){
        alert("Venta exitosa, bienvenido")
    }
    else if(dinero>1000){
        alert("No se puede realizar la compra, dinero insuficiente")
    }
    else{
        alert("No puedes ingresar, adios")
    }

}
//ejercicio14
let numeroIncognita = (7)
let numeroIngresado = prompt("Ingrese un numero")
if(numeroIncognita==numeroIngresado){
    alert("Ganaste, has adivinado el numero")
}
else if(numeroIncognita<numeroIngresado){
    alert("El numero ingresado es menor, vuelve a intentarlo")
}
else if(numeroIncognita>numeroIngresado){
    alert("El numero ingresado es mayor, vuelve a intentarlo")
}
//ejercicio15
let jugador1= prompt("Jugador 1 ingrese su eleccion")
let jugador2 = prompt("Jugador 2 ingrese su eleccion")

if(jugador1=="papel"&&jugador2=="piedra"){
    alert("El jugador 1 ha ganado")
}
else if (jugador1=="papel"&&jugador2=="tijera"){
    alert("El jugador 2 ha ganado")
}
else if (jugador1=="papel"&&jugador2=="papel"){
    alert("Han empatado")
}
else if (jugador1=="piedra"&&jugador2=="papel"){
    alert("El jugador 2 ha ganado")
}
else if (jugador1=="piedra"&&jugador2=="tijera"){
    alert("El jugador 1 ha ganado")
}
else if (jugador1=="piedra"&&jugador2=="piedra"){
    alert("Han empatado")
}
else if (jugador1=="tijera"&&jugador2=="papel"){
    alert("El jugador 1 ha ganado")
}
else if (jugador1=="tijera"&&jugador2=="piedra"){
    alert("El jugador 2 ha ganado")
}
else if (jugador1=="tijera"&&jugador2=="tijera"){
    alert("Han empatado")
}
else{
    alert("Eleccion incorrecta")
}
//ejercicio16

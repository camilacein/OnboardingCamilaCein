//ejercico1
let bucle = Number(prompt("Ingrese un numero del 1 al 100"))
if(bucle>=1&&bucle<=100){
    for (let i = bucle; i >= 0; i--) {
        console.log(i);
    }
}
//ejercicio2
let multiplicacion = Number(prompt("Ingrese un numero del 1 al 10"))

if(multiplicacion>=1&&multiplicacion<=10){
  for (let i = 1; i<=10; i++){
        let resultado = multiplicacion*i
        console.table(`${multiplicacion}x${i}=${resultado}`)
    }
}
//ejercicio3
let numeros = 0
let ingresarNumero = Number(prompt("Ingresar un numero"))

while(ingresarNumero!==0){
    numeros+=ingresarNumero
    ingresarNumero = Number( prompt( "Ingrese un numero o 0 para terminar" ) )
    
}
console.log(numeros)

//ejercicio4
let numeros1 = 0
let ingresarNumero1 = Number(prompt("Ingresar un numero"))

do{
    numeros1+=ingresarNumero1
ingresarNumero1 = Number( prompt( "Ingrese un numero o 0 para terminar" ) )
}
while(ingresarNumero1!==0);
console.log(numeros1)
//ejercicio5

let ingresarNumero2= Number(prompt("Ingresar un numero del 1 al 10"))
while(numeros!==ingresarNumero2){
    ingresarNumero2= Number(prompt("Ingresar un numero del 1 al 10"))
    if(numeros>ingresarNumero2){
        console.log("El numero es mayor")
    }
    else if(numeros<ingresarNumero2){
        console.log("El numero es menor")
    }
}
console.log("Has adivinado el numero")
//ejercicio6
let mecanseDeLosBucles= Number(prompt("Ingrese un numero"))
let divisor=1

   if(Number(mecanseDeLosBucles)){

    while(divisor<=numero){
        if(mecanseDeLosBucles%divisor===0){
         console.log(divisor);
        }
        divisor++;
     }
    }  
//ejercicio7
function sonarCampana(){
    console.log("Ding Dong");
    return "Ding Dong,"
}

let resultado = " "

for(let i = 0; i<4; i++){
    resultado = resultado+ sonarCampana()
}
console.log (resultado)
//ejercicio8
const fechaLimite = "1997-8-3"
const fechas = ["1984-10-2","1998-3-2","1973-15-7","2024-21-10","2001-1-9"]
for(let i = 0; i<=4; i++) {
if(fechas[i]>=fechaLimite){
    console.log (`${fechas[i]}`)
}   
}
//ejercicio9
let colores = ["rojo","verde","azul","violeta","amarillo","celeste","naranja","rosa"]
for (let color of colores){
    console.log(color)
}
//ejercicio10
function mostrarColores(colores){
for (let color of colores){
    console.log(color)
}

}
//ejercicio11
let array= [5,6,7,8,9]
for(let doble of array){
    console.log(`El doble de ${array[0]} es ${doble*2}`)
}
//ejercicio12
let familia =[
    {
        nombre: "Juan ",
        apellido: "Perez", 
        edad:35, 
        integrante: "Padre"
    },
    {
        nombre:"Marta ", 
        apellido: "Perez",
        edad: 32,
        integrante: "Madre"
    
    },
    {
      nombre:"Maria ",
      apellido:"Perez",
      edad:8,
      integrante:"hija mayor"
    },
    {
        nombre: "Clara ",
        apellido: "Perez",
        edad:4,
        integrante:"hija menor"
    }
]

function integrantes (familia){
    for(let integrante of familia){
        console.log(`Hola me llamo ${integrante.nombre+integrante.apellido} (${integrante.integrante}) y tengo ${integrante.edad} años`)
    }
}
integrantes(familia)
//ejercicio13
let objeto = {
    nombre: "Carlos",
    apellido:"Perez",
    esColombiano: true,
    edad: 45,
    estudios: "secundarios"
}
for (let propiedades in objeto){
    console.log(`${propiedades}`)
}
//ejercicio14
for (let propiedades in objeto){
    console.log(objeto[propiedades])
}
//ejercicio15
let pares=0
let impares=0
let yaCasiTermino= Number(prompt("Ingrese un numero"))


    while(yaCasiTermino!==0){
        if(yaCasiTermino%2==0){
         pares= pares+yaCasiTermino
        }
        else{
         impares= impares+yaCasiTermino
        }
        yaCasiTermino= Number(prompt("Ingrese un numero o 0 para finalizar"))
     }
    console.log(`Numeros pares: ${pares}`)
    console.log(`Numeros impares: ${impares}`)
    //ejercicio16
    let array1=[0,1,2,3,4,5,6,7,8,9]
   let numeroGrande= array1[0]
   for(let i =0; i<=10; i++){
    if(array1[i]>numeroGrande){
        numeroGrande=array1[i];

    }
   }
   console.log(`El numero más grande del array es: ${numeroGrande}`)



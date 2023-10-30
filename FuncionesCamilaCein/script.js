//ejercicio1
function sumar(){
   console.log(100+20)
}
//ejercicio2
sumar()
//ejercicio3y4
function sumar1 (numero,numero1){
console.log(numero+numero1)
}
let numeroA = 100
let numeroB = 20

sumar1 (numeroA, numeroB)
//ejercicio5
let numerA = 100
let numerB = 20

function sumar2 (numero,numero1){
   const resultado = numero+numero1
   return resultado
   }
   const resultadoSuma = sumar2 (numerA, numerB)
   console.log(resultadoSuma)
//ejercicio6

const funcionAnonima = function (numero,numero1){
      const resultado = numero+numero1
      return resultado
      }
console.log(funcionAnonima)

funcionAnonima()
//ejercicio7
let anonima = (numero, numero1) => {
   const resultado1 = numero+numero1;
   return resultado1;
}
//ejercicio8
function saludar(string){
   console.log(`Hola mi nombre es ${string}`)
}

saludar("Camila")
//ejercicio9 
let anonima2 = function (parametro1,parametro2){
   console.log(parametro1*parametro2)
}
anonima2(75,60)
//ejercicio10
function area (base,altura){
   const area = (base*altura)
   return area
}
area(3,5)
function perimetro (ladoA,ladoB,ladoC){
   const perimetro = (ladoA+ladoB+ladoC)
   return perimetro
}
perimetro(3,5,8)
//ejercicio11
let totalCompra = (precio,producto)=>{
   total= (precio*producto);
   if(producto>=10&&producto<20){
      let descuento = total - (total*10/100)
      console.log(`El total es ${descuento} con el 10% de descuento`)
   }
   else if(producto>=20){
      let descuento1 = total - (total*20/100)
      console.log(`El total es ${descuento1} con el 20% de descuento`)
   }

}
totalCompra(20,25)
totalCompra(30,10)
//ejercicio12
function esMayorDeEdad (edad){
   if(edad>=18){
      console.log("Eres mayor de edad")
   }
   else if (edad<18){
      console.log("Eres menor de edad")
   }
}
esMayorDeEdad(23)
esMayorDeEdad(15)
//ejercicio13
function impuesto(ingresoAnual){
   if(ingresoAnual<=10000){
      let porcentaje= (ingresoAnual*10/100)
      console.log(`El impuesto a pagar es el 10% de su ingreso, ${porcentaje}`)
   }
   else if(ingresoAnual>10000&&ingresoAnual<20000){
      let porcentaje= (ingresoAnual*15/100)
      console.log(`El impuesto a pagar es el 15% de su ingreso, ${porcentaje}`)
   }
   else{
      let porcentaje= (ingresoAnual*20/100)
      console.log(`El impuesto a pgar es el 20% de su ingreso, ${porcentaje}`)
   }

}

impuesto (2000)
impuesto (15000)
impuesto (20000)
//ejercicio14
function verificarDia (dia){
   switch(dia){
      case 1:
         console.log("Es un dia laboral")
         break;
      case 2:
       console.log("Es un dia laboral")
         break;
      case 3:
       console.log("Es un dia laboral")
        break;
      case 4:
         console.log("Es un dia laboral")
         break;
      case 5:
            console.log("Es un dia laboral")
       break;
      case 6:
         console.log("Es fin de semana")
         break;
      case 7:
         console.log("Es fin de semana")
         break;
   }
  
}
verificarDia(4)
verificarDia(7)
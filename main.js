//Preguntar nombre y la cantidad de numeros que queres sacar el promedio
let nombreIngresado = prompt("Bienvenido! Cual es su nombre?")
let cantidadNumeros = parseInt(prompt(nombreIngresado + " ingresa la cantidad de numeros que queres sacar el promedio"))
//La cantidad de numeros a ingresar
while(isNaN(cantidadNumeros)){
    cantidadNumeros = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de numeros que desea ingresar para " + nombreIngresado))
}
let total = 0
for(let i = 1; i <=cantidadNumeros; i++){
    //Esto se repite hasta que ingrese la cantidad de numeros que quizo
    let numero = parseInt(prompt(`Ingrese numero n° ${i}`))
    //Si no es un numero que tire un error
    while(isNaN(numero)){
        numero = parseInt(prompt(`Atención tipo de dato incorrecto, ingrese un number. Ingrese n° ${i}`))
    }
    //Function
    function funcionUno(){
        total = total + numero
        console.log(`El resultado es ${total}`)
    }
    //Mayor a 0 siempre
    if(numero >=0){
    funcionUno();
    }else{
        while(numero < 0){
            numero = parseInt(prompt(`Atención ingrese un valor entre 0 y 10 para la nota n°${i}`))
        }
        //Es el promedio total de todos los numeros ingresados
        funcionUno();
    }
}
let resultadoFinal = total / cantidadNumeros
//Decimales asi da con mayor exactitud la cuenta
console.log(nombreIngresado + ` el promedio es de ${resultadoFinal.toFixed(2)}`)

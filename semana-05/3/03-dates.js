let hoy = new Date()

console.log(hoy) //hoy

//año
console.log(hoy.getFullYear())

//Mes
console.log(hoy.getMonth())

//dia 
console.log(hoy.getDate())
let navidad= new Date(2021, 11, 25)
console.log(navidad)
let cuantoFaltaParaNavidad = navidad - hoy;

console.log(cuantoFaltaParaNavidad)
let diasParaNavidad = cuantoFaltaParaNavidad / 1000 / 60 / 60 / 24
console.log(diasParaNavidad
    )
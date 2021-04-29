//let bebidas=["Inka Cola","Sprite","Frugos","Margarita"]

//console.log(bebidas)

//let nuevaBebida=prompt("Ingrese una nueva Bebida")

//bebidas.push(nuevaBebida)

//console.log(bebidas)

//let frutas =["naranja", "piña","fresas"]
//pop siempre quitara el ultimo elemento
//frutas.pop()

//console.log(frutas)
//let animales=["gatos","perros","vacas","pinguinos","zorros"]
//animales.forEach(function(elemento,index){
  //  console.log(`${index} - ${elemento}`)
//})

//let alumnos=["Veronica","Jhan","Erick","Juan carlos","Violeta"];
//let alumnosSaludos= alumnos.map(function(nombre, index){
    //return`${index} - Hola soy ${nombre}`
//})
//console.log(alumnosSaludos)
//
//FIND
let dnis = ["21421412","32142142","21342148","01234567"];

let encontrado = dnis.find(function(elemento, index){
  // if(elemento === "01234567"){
  //   return elemento
  // }
  return elemento === "01234567"
})

console.log(encontrado)

//var n1 , i ;
//n1 =parseInt(prompt("Numero introducir : "));
//i=2;
//document.write("valor introducir"+n1)
//while (i<=n1)
//{
 //   document.write("<br>"+i);
  // i+=2;
//}
const output = Array.from({ length: 50 }).map((v, k) => k + 1).filter(v => v % 3 === 2); 
 
console.log(output); 
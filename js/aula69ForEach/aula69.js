const a1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


/*for (let valor of a1){
    console.log(valor);
}*/

let total = 0;
a1.forEach((valor, indice) =>{
    total += valor;
})
console.log(total);
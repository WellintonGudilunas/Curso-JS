const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);*/


// Some todos os números (reduce);
// const total = numeros.reduce((acumulador, valor, indice, array) => {}, 0 /* 0 É VALOR QUE INICIA O ACUMULADOR*/);
/*const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador = acumulador + valor;
    return acumulador;
}, 0);
console.log(total)*/



// Retorne um array com os pares (Filter);
/*const total = numeros.reduce((acumulador, valor, indice, array) => {
    valor % 8 === 0 ? acumulador.push(valor): false;
    return acumulador;
}, []);
console.log(total)*/



// Retorne, arrau com o dobro dos valores (Map);
/*const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push(valor * 2)
    return acumulador;
}, []);
console.log(total);*/


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 155},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 470},
];

// Pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade>valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)
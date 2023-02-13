// FILTER SEMPRE VAI RETORNAR UM ARRAY, COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS.
//---------------------------------------
//---------------------------------------
// Retorne os números maiores que 10;
//---------------------------------------
//---------------------------------------


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


//SEM O FILTER();
/*const maiorQue10 = [];

for (let index = 0; index < numeros.length; index++){
    if (numeros[index] > 10)
        maiorQue10.push(numeros[index]);
}
console.log(maiorQue10);*/


//COM FILTER

// callBackFilter = (valor, indice, array) 
// callBackFilter = valor =>  valor > 10 ? true: false;
/*callBackFilter = valor =>  valor > 10 ? true: false;
const maiorQue10 = numeros.filter(callBackFilter);
console.log(maiorQue10);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------
//---------------------------------------
// Retorne as pessoas que tem o nome com 5 letras ou mais;
// Retorne as pessoas com mais de 50 anos;
//Retorne as pessoas cujo nome termina com a;
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]

const pessoasComNomeMaiorQue5 = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComIdadeMaiorQue50 = pessoas.filter(obj => obj.idade > 50);
const pessoasQueNomeTerminaComA = pessoas.filter (obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasQueNomeTerminaComA)
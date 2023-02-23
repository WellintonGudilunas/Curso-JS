/*
Object.values
Object.entries;
Object.assign(des, any);
Object.getOwnPropertyDescriptor(o, 'prop');
... (spread);


//Já foi visto
Object.keys (retorna as chaves);
Object.freeze (congela o objeto);
Object.defineProperties (define várias propriedades);
Object.defineProperty (define uma prioridade)
*/


//COPIAR OBJETO PARA OUTRO
/* 
const produto = {nome: 'Produto', preco: 18};
//const caneca = {... produto};
const caneca = Object.assign({}, produto); // COPIAR O OBJETO PRODUTO PARA O OUTRO OBJETO CANECA
caneca.nome = 'Well';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
*/
const produto = {nome: 'Produto', preco: 18, material: 'fd'};
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retorna as propriedades
//console.log(Object.values(produto)) // mostra só os valores em forma de array, sem a chave;
//console.log(Object.entries(produto)) // retorna um array de array
for(let valor of Object.entries(produto)){
console.log(valor[0], valor[1])
}

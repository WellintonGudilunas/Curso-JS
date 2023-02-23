const numbers  = [1, 20, 100, 200, 21, 30, 1000, 40];


//RETORNA TODOS OS VALORES DO ARRAY;
const map = numbers.map(x => x);


//RETORNA TODOS OS VALORES DO ARRAY DUPLICADOS;
const map2 = numbers.map(x => x*2);


//RETORNA TODOS OS VALORES DO ARRAY E SEUS INDICES;
const map3 = numbers.map((x, index) =>{
    return `${x} ${index}`
});

/*
console.log(map)
console.log(map2)
console.log(map3)*/



const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

// mostra o array completo;
const arrayPessoas = pessoas.map(obj => obj);
// console.log(arrayPessoas);


// RETORNA APENAS OS NOMES
const apenasNomes = pessoas.map(obj => ({nome: obj.nome}));
// console.log(apenasNomes);

// RETORNA APENAS AS IDADES
const apenasIdades = pessoas.map(obj => ({idade: obj.idade}));
// console.log(apenasIdades);


// CRIA UM NOVO OBJETO chamado newObj com os mesmos nomes e idades anteriores adicionando um ID único á cada um.
const adicionarUmIdParaCadaPessoa = pessoas.map((obj, index) =>{
    const newObj = { ...obj};
    newObj.id = index +1;
    return newObj;
});
// console.log(adicionarUmIdParaCadaPessoa);






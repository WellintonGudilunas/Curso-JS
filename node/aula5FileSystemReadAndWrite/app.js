const path = require('path');
const caminhoArquivo = path.resolve(__dirname,  'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'Teste1'},
//     {nome: 'Teste2'},
//     {nome: 'Teste3'},
//     {nome: 'Teste4'},
//     {nome: 'Teste5'},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(value => console.log(value))
}
leArquivo(caminhoArquivo)


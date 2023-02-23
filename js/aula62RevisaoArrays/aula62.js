// const nomes = new Array('Kaike', 'Cleito', 'Leomidas');

//VALOR POR REFERENCIA SE MEXER ALGO EM 'NOVO' AUTOMATICAMENTE MEXE EM 'NOMES' e VICE VERSA
/*const nomes = ['Kaike', 'Cleito', 'Leomidas'];
const novo = nomes;*/

// delete nomes[2]; // REMOVE O ITEM DO ARRAY SEM MEXER NO INDICE
// nomes.pop() // REMOVE O ULTIMO ITEM DO ARRAY;
//nomes.shift // REMOVE O PRIMEIRO ITEM DO ARRAY;

//nomes.push('Gepeto') // ADICIONA UM ITEM NO FINAL DO ARRAY // TANTO SHIFT QUANTO UNSHIFT PODEM CAUSAR PROBLEMAS DE PERFORMANCE PORQUE DELSOCAM O INDICE DE TODO O ARRAY
//nomes.unshift('Gepeto') // ADICIONA UM ITEM NO INICIO DO ARRAY // TANTO SHIFT QUANTO UNSHIFT PODEM CAUSAR PROBLEMAS DE PERFORMANCE PORQUE DELSOCAM O INDICE DE TODO O ARRAY

//const nomes = nome.split(','); //TRANSFORMA STRING EM ARRAY // PARA STRINGS // VAI TORNAR UM INDICE DO ARRAY CADA ITEM SEPARADO POR VIRGULA (,);
//const nome = nomes.join(' '); // TRANSFORMA ARRAY EM STRING // PARA ARRAYS // VAI TORNAR OS INDICES DO ARRAY EM UMA STRING


//nomes.slice(2, 4) // PEGA O INDICE 2 e 4 DO ARRAY

//COPIANDO O VALOR DE NOMES PARA NOVO ENTAO UMA ALTERAÇÃO EM UM NÃO ALTERA O OUTRO
/*const nomes = ['Kaike', 'Cleito', 'Leomidas'];
const novo = [...nomes];*/



/*const nomes = ['Kaike', 'Cleito', 'Leomidas', 'Gepeto', 'Aluiziio'];
const novo = nomes.slice(1, -2);
console.log(novo);*/



const nomes = ['Kaike', 'Cleito', 'Leomidas', 'Gepeto', 'Aluiziio'];
const nome = nomes.join(', ');
console.log(nome)

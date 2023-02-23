const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// -> Filtrar pares;
// Retorne a soma do dobro de todos os pares;
// -> Dobrar os valores;
// -> Reduzir (somar tudo);
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map((valor => valor * 2))
    .reduce((acumulador, valor) => acumulador + valor);


console.log(numerosPares);




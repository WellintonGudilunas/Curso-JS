function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            if(typeof msg !== 'string'){
                reject(new Error('Erro'));
                return;
            } 
            resolve(msg.toUpperCase() + ' Passei');
            return;
        }, tempo)
    });
}

// Promisse.all // RETORNA AS PROMISSES APOS TODAS PROMISES SEREM RESOLVIDAS
/*const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    //esperaAi(100, 1000), esse erro faz todas cairem no catch
    esperaAi('Promise 3', 1000),
    'Outro valor',
];

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(error =>{
    console.log(erro);
});*/


// Promisse.race // RETORNA A PROMISSE QUE FOR RESOLVIDA PRIMEIRO
/*const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1222, rand(1, 5)),

];

Promise.race(promises)
.then(valor => {
    console.log(valor)
})
.catch(error =>{
    console.log(error);
});*/

// Promisse.resolve
/*function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Página em cache');
    }else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(error => console.log(error))*/

// Promisse.reject
function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    }else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(error => console.log('ERRO', error))
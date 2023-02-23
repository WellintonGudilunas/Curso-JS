function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}



function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject(new Error())
        setTimeout(() =>{
            resolve(msg);
        }, tempo)
    });
}

esperaAi('Conexão com o DB', rand(1, 3))
.then( resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1, 3));
})
.then(resposta =>{
     console.log(resposta)
     return esperaAi(2222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then( ()=> {
    console.log('Exibe dados')
})

.catch(error =>{
    console.log('ERRO', error)
});

console.log('Isso aqui será exibido antes de tudo')



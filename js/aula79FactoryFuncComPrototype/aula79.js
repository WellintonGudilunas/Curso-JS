const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
};
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
};
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
};
const pessoaProtype = { ...falar, ...comer, ...beber};
//const pessoaProtype = Object.assign({}, falar, comer, beber);
function criaPessoa(nome, sobrenome){

    return Object.create(pessoaProtype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa('Well', 'Rato');
const p2 = criaPessoa('Kaike', 'Robirio');
console.log(p1);
console.log(p2);


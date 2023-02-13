/*const pessoa = {
    nome: 'Well',
    sobrenome: 'Cleiton',
};
const chave = 'nome';
console.log(pessoa[chave], pessoa['sobrenome']);
console.log(pessoa.nome, pessoa.sobrenome);*/



// OBJETOS COM MÉTODOS

/*const pessoa2 = new Object();
pessoa2.nome = 'Well';
pessoa2.sobrenome = 'Cleirto'
pessoa2.idade = 2;
// delete pessoa2.nome;
pessoa2.falarNome = function(){
    return (`${this.nome} está falando seu nome.`)
}
pessoa2.getDataNascimento = function (){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade 
}
for (let chave in pessoa2){
    console.log(pessoa2[chave]);
}
*/


//Factory functions 
/*
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('Well', 'Cleito');
console.log(p1.nomeCompleto);
*/


// Constructor functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // TRAVA O OBJETO NAO PODE ALTERAR
}

// New  vai criar um objeto vazio e atrelar o this ao objeto
const p1 = new Pessoa('Well', 'Cleito');
const p2 = new Pessoa('Kaike', 'Roberio');
console.log(p1);
console.log(p2);



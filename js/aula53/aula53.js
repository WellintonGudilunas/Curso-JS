function retornaFuncao(nome){
    return function (){
        return nome;
    }
}

const funcao =  retornaFuncao('Well');
const funcao2 =  retornaFuncao('João');
console.log(funcao(), funcao2());

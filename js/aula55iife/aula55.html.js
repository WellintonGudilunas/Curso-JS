// IIFE -> Immediately invoked function expression
(function (idade, peso, altura){
    const sobrenome = 'Well2'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Well'));
    }
    falaNome();
    console.log(idade, peso, altura)
})(30, 80, 1.90);

const nome = 'Qualquer coisa';
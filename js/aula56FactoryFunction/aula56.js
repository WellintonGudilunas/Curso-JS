// FACTORY FUNCTION
// FACTORY FUNCTION

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        //GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        fala: function(assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,

        //GETTER
        get imc(){
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Well', 'Jr', 1.9, 90);
p1.nomeCompleto = 'Paulinho Paulo paulante'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala());


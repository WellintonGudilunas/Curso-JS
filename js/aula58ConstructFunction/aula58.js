//FUNÇÃO CONSTRUTORA -> objetos
//FUNÇÃO FAHBRICA -> objetos

//CONSTRUTORA -> Primeira palavra com letra MAIUSCULA
function Pessoa(nome, sobrenome){
    const id = 123456;
    const metodoInterno = () => {

    };
    
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.id = id;

    this.metodo = () => {
        console.log(this.nome +': Sou um método');
    }

}

const p1 = new Pessoa('Leo', 'Groeffer');
const p2 = new Pessoa('Cleito', 'Rasta');

p1.metodo();
p2.metodo();






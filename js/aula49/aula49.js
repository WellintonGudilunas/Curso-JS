//Declaração de função desse jeito ocorre Hoisting;
function oi (){
    console.log('Oi');
}
oi();

// First-class objects (Objetos de primeira clase);

//Function expression;
const dado = function (){
    console.log('Dado')
}
dado();

// Arrow function
const arrowFunction = () => {
    console.log('Arrow function')
}
arrowFunction();

// dentro de um objeto;
const objeto = {
    falar(){
        console.log('Falando')
    }
};
objeto.falar();

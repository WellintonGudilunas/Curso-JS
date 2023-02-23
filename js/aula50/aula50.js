// Esse tipo de declaração tem uma variavel arguments que sustenta todos argumentos enviados
function tst (){

}




// ARROW FUNCTION nao tem ARGUMENTS
// ASSIM PODE SER USADO COMO SE FOSSE ARGUMENTS
const conta = (...args) =>{
    console.log(args);
};
conta('+', 1, [20, 30, 40, 50]);
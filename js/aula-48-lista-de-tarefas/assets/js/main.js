const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaBotaoApagar(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.setAttribute('title', 'apagar esta tarefa')
    li.appendChild(btnApagar);

}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

const limpaInput = function(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);

    }
    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for ( let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

inputTarefa.addEventListener('keypress', (evento) =>{
    if (evento.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', () =>{
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
})  

document.addEventListener('click', (evento)=> {
    const elemento = evento.target;
    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }

})





















const h1 = document.querySelector(".container h1")
const data = new Date();
h1.innerHTML = data.toString();
function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo','Segunda Feira','Terça Feira','Quarta Feira','Quinta Feira','Sexta Feira','Sábado']
    return diasSemana[diaSemana];
}
function getNomeMes(numMes){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio', 'Junho','Julho',
    'Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses[numMes];

}
function zeroEsquerda(num) {
    return num >= 10 ? num: `0${num}`;
}
function criaData(data){
    const diaSemana = data.getDay();
    const numMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numMes);
    return `${nomeDia}, ${zeroEsquerda(data.getDate())} de ${nomeMes}
    de ${zeroEsquerda(data.getFullYear())}
    ${data.getHours()}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}`;
}
h1.innerHTML = criaData(data);

/*const h1 = document.querySelector(".container h1")
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);*/
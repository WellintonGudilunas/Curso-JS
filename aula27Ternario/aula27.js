
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const classeUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Black';
const corPadrao = corUsuario || 'vermelho'        
console.log(classeUsuario, corPadrao)

/*
const n1 = 10;
const n2 = 20;
const p = n1 < n2 ? 'Sim' : 'Não';
console.log(p);
*/

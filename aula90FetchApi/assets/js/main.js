document.addEventListener('click', event =>{
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();
    if (tag === 'a'){
        event.preventDefault();
        carregaPagina(elemento);
    }
    console.log(elemento);
});


async function carregaPagina(elemento){

    try{
        const href = elemento.getAttribute('href');
        const response = await fetch(href);
        
        if(response.status !== 200) throw new Error('ERRO 404 MEUU');

        const html = await response.text();
        carregaResultado(html)
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}






/*
fetch('pagina4.html')
    .then(resposta =>{
        if(resposta.status !== 200) throw new Error('ERRO 404 MEU');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(error => console.warn(error));
   // .catch(error => console.error(error));
*/

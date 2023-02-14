const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);
    
        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    });
};

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
    try {
        const href = elemento.getAttribute('href');
        const objConfig = {
            method: 'GET',
            url: href,
        }
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(error){
        console.log(error);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

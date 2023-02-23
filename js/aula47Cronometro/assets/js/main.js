function cronometro (){
    const getTimeFromSeconds = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {timeZone: 'UTC'});
    }
    console.log(getTimeFromSeconds(10))
    
    const relogio = document.querySelector('.relogio');
    /*const BtnIniciar = document.querySelector('.iniciar');
    const BtnPausar = document.querySelector('.pausar');
    const BtnZerar = document.querySelector('.zerar');*/
    let segundos = 0;
    let timer;
    
    const iniciaCronometro = () =>{
    
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', (evento) => {
        const elemento = evento.target;
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaCronometro();
        }
        if(elemento.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
        if(elemento.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }       
    });
    /*
    BtnIniciar.addEventListener('click', function(event){
    
    })
    BtnPausar.addEventListener('click', function(event){
    
    
    })
    BtnZerar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    
    });
    */
}
cronometro();

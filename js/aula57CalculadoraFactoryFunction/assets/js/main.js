function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia: function(){
            this.clickBotoes();
            this.pressionaEnter();
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', (evento)=>{
                if (evento.keyCode === 13)
                    this.realizaConta();
                
                    
            })
        },
        
        clickBotoes: function(){
            document.addEventListener('click', (evento) =>{
                const elemento = evento.target;
                
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText);
                }
                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(elemento.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                console.log(elemento)
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        },

        clearDisplay(){
            this.display.value = '';
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, - 1)
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    return;
                }
                this.display.value = String(conta);

            } catch (e){
                alert('Conta inválida');
                return;
            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

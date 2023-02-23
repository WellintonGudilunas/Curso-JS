function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter()
    };
    this.capturaEnter = () => {
        document.addEventListener('keypress', event =>{
            if(event.key !== 'Enter') return;
            this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const elemento = event.target;
            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if(elemento.classList.contains('btn-clear')) this.clear();
            if(elemento.classList.contains('btn-del')) this.deletaNum();
            if(elemento.classList.contains('btn-eq')) this.realizaConta(elemento);
        })
    };

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = ' ';
    this.deletaNum = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta inválida');
                return;
            } 
            this.display.value = conta;
        }catch(error){
            alert('Conta inválida');
            return;
        }
    };




}

const calculadora = new Calculadora();
calculadora.inicia();
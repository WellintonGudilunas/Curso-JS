class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
        console.log(this.novoCPF);
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let contadorReverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += contadorReverso * Number(stringNumerica);
            contadorReverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }

}
// let validacpf = new ValidaCPF('070.987.720-03');
//  validacpf = new ValidaCPF('13182115901');
//  validacpf = new ValidaCPF('999.999.999-99');

// if(validacpf.valida()){
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido')
// }
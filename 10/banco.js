class Conta {
    _saldo; // Saldo privado
    _titular; // Titular privado

    constructor(titular, saldoInicial) {
        this._titular = titular;
        this._saldo = saldoInicial;
    }

    getSaldo() {
        return `Saldo de ${this._titular}: R$ ${this._saldo}`;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Deposito feito com sucesso. Novo saldo de ${this._titular}: R$ ${this._saldo}`);
            return true;
        }
        console.log("Valor inválido para depósito!");
        return false;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque feito com sucesso. Novo saldo de ${this._titular}: R$ ${this._saldo}`);
            return true;
        }
        console.log("Valor inválido para saque!");
        return false;
    }

    transferir(valor, contaDestino) {
        console.log(`Transferencia iniciada.`);
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log(`Transferencia feita com sucesso.`);
            return true;
        }
        console.log(`Transferencia cancelada.`);
        return false;
    }
}

class ContaPoupanca extends Conta {
    calcularRendimento() {
        this._saldo += this._saldo * 0.005;
    }
}

class ContaCorrente extends Conta {
    sacar(valor) {
        const taxa = valor * 0.02;
        const novoValorTotal = valor + taxa;
        super.sacar(novoValorTotal);
    }
}

let conta1 = new ContaPoupanca("Paulo", 1200);
let conta2 = new ContaCorrente("Clodoaldo", 2100);
console.log(conta2.getSaldo());
// console.log(conta2.getSaldo());
// conta1.calcularRendimento();
// console.log(conta1.getSaldo());
conta2.sacar(100)
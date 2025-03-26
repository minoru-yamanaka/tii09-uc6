class Carro {
    marca ="";
    modelo ="";
    ano = 0;
    ligado = false;
    velocidadeAtual = 0;
    velocidadeMaxima = 200;
    aceleracao = 5;
    frenagem = 2;

    constructor(marca, modelo, ano, velocidadeMaxima, aceleracao, frenagem) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;   
        
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
        this.frenagem = frenagem;   
        this.ligado = false;
        this.velocidadeAtual = 0;
    }

    ligar() {
        this.ligado = true;
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
        return null;
    }

    acelerar() {
        if (this.ligado === false) {
            console.log(`O carro ${this.modelo} está desligado`);
            return;
        } else {
            this.velocidadeAtual += this.aceleracao;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
        console.log(`O ${this.modelo} está a ${this.velocidadeAtual}KM/h`);
        }
    }

    frear() {
        this.velocidadeAtual -= this.frenagem;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        console.log(`O ${this.modelo} está a ${this.velocidadeAtual}KM/h`);
    }
}

let carro = new Carro("Chevrolet", "Camaro", 2018, 350, 60, 45);

carro.acelerar();
carro.ligar();
carro.acelerar();
console.log(carro);

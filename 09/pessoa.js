// Propriedades: altura, peso, anoNascimento, nome, vivo
 class Pessoa {
    altura = 0;
    peso = 0;
    anoNascimento = 0;
    nome ="";
    vivo = true;
    
    constructor(altura, peso, anoNascimento, nome, vivo) {
        this.altura = altura;
        this.peso = peso;
        this.anoNascimento = anoNascimento;
        this.nome = nome;
        this.vivo = true;
    }

    // Metodos: andar, pular, mostrarIdade

    morrer() {
        // this.vivo = false;
        if (this.vivo === true) {
            this.vivo = false;
            console.log(`${this.nome} morreu`);
        } else {
            console.log(`${this.nome} já está morto`);
        }
    }

    vivoOuMorto() {
        if (this.vivo === true) {
            console.log(`${this.nome} está vivo`);
        } else {
            console.log(`${this.nome} está morto`);
        }
    }

    andar() {
        if (this.vivo === true) {
            console.log(`${this.nome} está andando`);
        }
    }

    pular() {
        if (this.vivo === true) {
            console.log(`${this.nome} está pulando`);
        }
    }

    mostrarIdade(anoAtual) {
        if (this.vivo === true) {
            console.log(`${this.nome} tem ${anoAtual - this.anoNascimento} anos`);
        }
    }
}

let pessoaMinoru = new Pessoa(1.69, 59, 1995, "Minoru", true);
pessoaMinoru.vivoOuMorto();
pessoaMinoru.andar();
pessoaMinoru.pular();
pessoaMinoru.mostrarIdade(2025);
pessoaMinoru.morrer();
pessoaMinoru.vivoOuMorto();

console.log(pessoaMinoru);




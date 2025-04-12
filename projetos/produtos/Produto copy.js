export class Produto {
    static tipo = ""; // Valor padrão para a variável estática
    #id;
    #nome;
    #preco;
    #peso;
    #validade;

    constructor(nome, preco, peso, validade, tipo) {
        this.#id = crypto.randomUUID(); // Gera um identificador único
        this.#nome = nome;
        this.#preco = preco;
        this.#peso = peso;
        this.#validade = validade;
        Produto.tipo = tipo; // Define o tipo como uma propriedade estática da classe
    }

    // Método para exibir os detalhes de forma controlada
    getDetalhes() {
        return {
            id: this.#id,
            nome: this.#nome,
            preco: this.#preco,
            peso: this.#peso,
            validade: this.#validade,
            tipo: Produto.tipo
        };
    }
}

// Criando os objetos
let p1 = new Produto("bone", 20, 1, '2025-04-13', 'vestuario');
// Alterando o tipo do produto
Produto.tipo = 'eletronico'; // Mudando o tipo para 'eletronico'
// Criando outro objeto com o novo tipo
let p2 = new Produto("ps5", 4500, 1, '2025-04-13', 'eletronico');

// Exibindo os detalhes
console.log(p1.getDetalhes());
console.log(p2.getDetalhes());
//---------------------------

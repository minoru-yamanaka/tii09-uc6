//// OBJETOS: CONTÉM MÉTODOS E ATRIBUTOS

// OBJETO LITERAL
let carroA = {
    marca: "toyota",
    modelo: "Corolla",
};

let carroB = {
    marca: "fiat",
    modelo: "Uno",
    ano: 2009,
    ligar: function() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
};

let carros = [carroA, carroB];

console.log(carroA.marca); // toyota
console.log(carroB.modelo); // Uno
console.log(carroB.ano); // 2009
console.log(carroB.ligar()); // O carro fiat Uno está ligado


console.log(carros[1].ligar()); // O carro fiat Uno está ligado



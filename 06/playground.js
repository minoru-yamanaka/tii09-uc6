let vagas = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let nomes = ["abc", "def", "hij"];

console.log(vagas[2][1]); // 10

let predio = [
    ["1S", "2S", "3S"],
    ["00", "01", "Atendimento"],
    ["A1", "A2", "A3"]
];

console.log(predio[1][2]); // Atendimento
console.log(predio); // A1

predio[1][2] = "RH";

console.log(predio);

// Adicionando uma nova linha na Matriz
predio.push(["B1", "B2", "B3"]);
console.log(predio);


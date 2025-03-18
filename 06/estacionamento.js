let estacionamento = [
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"]
]

function estacionarCarro(linha, coluna, placa) {
    if(estacionamento[linha][coluna] === "Vazio") {
        estacionamento[linha][coluna] = placa;
    } else {
       console.log( `ESSA VAGA ESTÁ OCUPADA! VEÍCULO: ${estacionamento[linha][coluna]}`);
    }
}

function exibirEstacionamento(){
    console.log(estacionamento);
}

function removerCarro(linha, coluna){
    estacionamento[linha][coluna] = "Vazio";
}

exibirEstacionamento();
estacionarCarro(1, 1, "ZBX9887N");
estacionarCarro(2, 1, "ZBX9887N");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");

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
     // remove um carro se a vaga estiver ocupada
     if(estacionamento[linha][coluna] !== "Vazio") {
        console.log(`Removendo o veículo: ${estacionamento[linha][coluna]}`)        
        estacionamento[linha][coluna] = "Vazio";
    } else {
        console.log("VAGA JÁ SE ENCONTRA VAZIA!");
    }
}

exibirEstacionamento();
estacionarCarro(1, 1, "ZBX9887N");
estacionarCarro(2, 1, "ZBX9887N");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
removerCarro(1,1);
exibirEstacionamento();

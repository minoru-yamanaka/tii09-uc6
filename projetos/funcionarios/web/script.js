import { Gerente } from './Gerente.js';
import { OperadorCaixa } from './OperadorDeCaixa.js';
import { Estagiario } from './Estagiario.js';

// Implementar logica de integração com a página


document.getElementById("btnCadastrar").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const ano = document.getElementById("anoAdmissao").value;
    const endereco = document.getElementById("endereco").value;
    const tipo = document.getElementById("tipoFuncionario").value;

    console.log("Chamou o cadastrar");
    alert("Cadastrar");
})
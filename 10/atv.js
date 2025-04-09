// # Gerenciamento de Funcionarios

// Uma empresa de médio porte deseja desenvolver um pequeno sistema de **cadastro e gerenciamento de funcionários**, com foco em diferenciar as responsabilidades e comportamentos de cargos diversos. O sistema será estruturado em **programação orientada a objetos**, utilizando uma classe base genérica chamada **Funcionário**, da qual derivarão classes específicas para cada tipo de cargo, como **Gerente**, **OperadorDeCaixa** e **Estagiario**.

// A classe **Funcionário** deverá conter informações comuns a todos os colaboradores, como o **nome completo**, **número de matrícula**, **ano de admissão na empresa** e o **endereço residencial**. Além disso, todos os funcionários devem ser capazes de **receber salário** (função que retorna uma mensagem confirmando o valor recebido), **verificar o tempo de empresa** com base no ano de admissão e no ano atual (função que retorna a quantidade de anos trabalhados), e **bater ponto**, que será uma função com retorno simples, simulando o registro de horário (como uma string “Ponto registrado para Fulano”).

// Com base nessa estrutura, será criada a classe **Gerente**, que herda todos os comportamentos da classe Funcionário, mas inclui funcionalidades específicas como a **autorização de despesas** acima de um determinado valor. Além disso, o método de **receber salário** será sobrescrito para incluir um **bônus de 20%** sobre o salário informado, utilizando `super.receberSalario()` como base, mas modificando o cálculo, representando o polimorfismo.

// Outra especialização será a classe **OperadorDeCaixa**, que também herda de Funcionário, mas incorpora a função de **fechamento de caixa**, onde, ao final do expediente, o operador deverá registrar o total movimentado durante o dia. O operador utilizará a função `baterPonto()` normalmente, sem alteração, mas a função de **receber salário** poderá ser sobrescrita futuramente caso a empresa deseje incluir comissões, embora inicialmente mantenha o comportamento padrão da classe base.

// Por fim, a classe **Estagiario** será a terceira especialização da classe Funcionário. O estagiário não poderá utilizar todas as funções da classe base da mesma forma. A função de **receber salário** será sobrescrita, mas com uma lógica simplificada: seu pagamento será fixo e menor, e a função retornará uma mensagem informando o valor fixo de bolsa recebido. Além disso, o estagiário não terá a função de **autorização de despesas** nem **fechamento de caixa**, mas terá uma função adicional chamada **registrarAtividade**, que armazena uma descrição da tarefa realizada no dia, simulando o acompanhamento de sua rotina de aprendizado.

// A construção dessas classes permitirá compreender de forma prática os pilares da orientação a objetos: **encapsulamento** (ao proteger atributos com acesso controlado), **herança** (ao permitir o reaproveitamento da estrutura da classe Funcionário), e **polimorfismo** (ao sobrescrever comportamentos como o recebimento de salário em diferentes contextos).

// **cadastro e gerenciamento de funcionários** 

class Funcionario {
    _nomeCompleto;
    _numeroDeMatricula;
    _anoDeAdmissaoNaEmpresa;
    _endereco_residencial;

    constructor(nomeCompleto, numeroDeMatricula, anoDeAdmissaoNaEmpresa, endereco_residencial) {
        this._nomeCompleto = nomeCompleto;
        this._numeroDeMatricula = numeroDeMatricula;
        this._anoDeAdmissaoNaEmpresa = anoDeAdmissaoNaEmpresa;
        this._endereco_residencial = endereco_residencial;
    }

    // exibir informacoes (função quie exibe as informações do funcionário)
    exibirInformacoes() {
        console.log(`Nome: ${this._nomeCompleto}, Matrícula: ${this._numeroDeMatricula}, Ano de Admissão: ${this._anoDeAdmissaoNaEmpresa}, Endereço: ${this._endereco_residencial}\n`);
    }

    // receber salário (função que retorna uma mensagem confirmando o valor recebido)

    ReceberSalario(valorRecebido) {
        let salario = valorRecebido;
        console.log(`Salario recebido: ${salario}`);
        
    }
    //--------------------------------------------
    // verificar o tempo de empresa com base no ano de admissão e no ano atual (função que retorna a quantidade de anos trabalhados),
    verificarOTempoDeEmpresa(anoDeAdmissao, anoAtual) {
        quantidadeDeAnosTrabalhados = anoAtual - anoDeAdmissao; 
        console.log(`Quantidade de anos trabalhados na empresa: ${quantidadeDeAnosTrabalhados}`);
    }
    //--------------------------------------------
    // bater ponto que será uma função com retorno simples, simulando o registro de horário (como uma string “Ponto registrado para Fulano”)
    baterPonto() {
         console.log(`Ponto registrado para ${this._nomeCompleto}`);
    }
    //--------------------------------------------
}
//--------------------------------------------

// Com base nessa estrutura, será criada a classe **Gerente**, que herda todos os comportamentos da classe Funcionário, mas inclui funcionalidades específicas como a **autorização de despesas** acima de um determinado valor. Além disso, o método de **receber salário** será sobrescrito para incluir um **bônus de 20%** sobre o salário informado, utilizando `super.receberSalario()` como base, mas modificando o cálculo, representando o polimorfismo.

class Gerente extends Funcionario {
    autorizacaoDeDespesas(determinadoValor , valorMaximo) {
        if (determinadoValor > 1000) {
            console.log(`Despesa autorizada: ${determinadoValor}`);
        } else {
            console.log(`Despesa não autorizada: ${determinadoValor}`);
        }
    }

    ReceberSalario(valorRecebido) {
        super.ReceberSalario(valorRecebido); // Chama o método da classe pai
        let salarioComBonus = valorRecebido * 1.2; // Bônus de 20%
        console.log(`Salário com bônus de 20% recebido: ${salarioComBonus}`);

    }
}
//--------------------------------------------

// Outra especialização será a classe **OperadorDeCaixa**, que também herda de Funcionário, mas incorpora a função de **fechamento de caixa**, onde, ao final do expediente, o operador deverá registrar o total movimentado durante o dia. O operador utilizará a função `baterPonto()` normalmente, sem alteração, mas a função de **receber salário** poderá ser sobrescrita futuramente caso a empresa deseje incluir comissões, embora inicialmente mantenha o comportamento padrão da classe base.

class OperadorDeCaixa extends Funcionario {
    fechamentoDeCaixa(valorMovimentado) {
        console.log(`Fechamento de caixa realizado. Total movimentado: ${valorMovimentado}`);
    }

    ReceberSalario(valorRecebido, comissoes) {
        super.ReceberSalario(valorRecebido); // Chama o método da classe pai
        let salarioComBonus = valorRecebido * comissoes; // Bônus de 20%
        console.log(`Salário com bônus de 20% recebido: ${salarioComBonus}`);
    }
}
//--------------------------------------------

// Por fim, a classe **Estagiario** será a terceira especialização da classe Funcionário. O estagiário não poderá utilizar todas as funções da classe base da mesma forma. A função de **receber salário** será sobrescrita, mas com uma lógica simplificada: seu pagamento será fixo e menor, e a função retornará uma mensagem informando o valor fixo de bolsa recebido. Além disso, o estagiário não terá a função de **autorização de despesas** nem **fechamento de caixa**, mas terá uma função adicional chamada **registrarAtividade**, que armazena uma descrição da tarefa realizada no dia, simulando o acompanhamento de sua rotina de aprendizado.

class Estagiario extends Funcionario {
    ReceberSalario(valorRecebido) {
        super.ReceberSalario(valorRecebido); // Chama o método da classe pai
        let salarioFixo = 500; // Salário fixo para estagiário
        console.log(`Bolsa recebida: ${salarioFixo}`);
    }

    registrarAtividade(atividade) {
        console.log(`Atividade registrada: ${atividade}`);
    }

}
//--------------------------------------------

// Impresoes 

let Funcionario1 = new Funcionario (`Funcionario1`, 1, 1995, `Rua 1`);
Funcionario1.baterPonto();
Funcionario1.ReceberSalario(1000);
Funcionario1.exibirInformacoes();

let Gerente1 = new Gerente (`Gerente1`, 1, 1995, `Rua 1`);
Gerente1.baterPonto();
Gerente1.ReceberSalario(1000);
// autorizacaoDeDespesas(determinadoValor , valorMaximo)
Gerente1.autorizacaoDeDespesas(2000, 1000);
Gerente1.exibirInformacoes();

let OperadorDeCaixa1 = new OperadorDeCaixa (`OperadorDeCaixa1`, 1, 1995, `Rua 1`);
OperadorDeCaixa1.baterPonto();
OperadorDeCaixa1.ReceberSalario(1000, 3.0);
OperadorDeCaixa1.exibirInformacoes();

let Estagiario1 = new Estagiario (`Estagiario1`, 1, 1995, `Rua 1`);
Estagiario1.baterPonto();
Estagiario1.ReceberSalario(1000);
Estagiario1.registrarAtividade(`Servir café`)
Estagiario1.exibirInformacoes();




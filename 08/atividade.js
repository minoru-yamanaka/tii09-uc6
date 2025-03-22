let alunos = [
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" },
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" }
];


// BUSCA BINÁRIA POR JOÃO, PARA ISSO A LISTA PRECISA ESTAR ORDENADA EM ORDENADA POR CPF


// console.log(alunos);

function adenilsaSort(array) {
  let i = 0;

  while(i < array.length - 1) {
      // O aluno atual é o maior até o momento
      let ref = i;

      // Compara o aluno atual com o próximo
      if(array[i].cpf > array[i + 1].cpf) {
          // Se o próximo aluno for mais baixo, troca
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
      } else {
          // Caso contrário, move o "referencia" para o próximo
          ref = i + 1;
      }

      // Incrementa a iteração e passa para o próximo aluno
      i = ref;
  }

  return array;
}

// TESTE
console.log(adenilsaSort(alunos));

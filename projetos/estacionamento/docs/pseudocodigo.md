- Gerenciar Vagas
```
INICIO
	vagas[]
	totalHoras[]
	escolha vaga X
	ESCREVA "Informe a Hora"
	LEIA hora
	SE vaga[x] == NÃO OCUPADA
	  vaga[x] = hora
	SE NAO
      SE  hora < vaga[x]
        ESCREVA "Hora de saída menor que hora de entrada"
	  intervalo = hora - vaga[x]
	  totalHoras[x] = intervalo
	  vaga[x] = NÃO OCUPADA 
FIM
```
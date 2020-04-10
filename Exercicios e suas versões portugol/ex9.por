programa
{
	
	funcao inicio()
	{
		cadeia nome
		real salario , aumento

		escreva("Nome do funcionario: ")
		leia(nome)
		escreva("Salário: ")
		leia(salario)

		se (salario>=5000){
			escreva("Você ganhou um aumento de 5 % ")
			aumento = salario*5/100
			aumento = salario + aumento
			escreva("\nAgora seu salário é : " + aumento)
			
			}
		senao
			{
				escreva("Você ganhou um aumento de 10 % ")
				aumento = salario*10/100
				aumento = salario + aumento
				escreva("\nAgora seu salário é : " + aumento)
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 524; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
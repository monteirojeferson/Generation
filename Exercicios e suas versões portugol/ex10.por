programa
{
	
	funcao inicio()
	{
		real n1,n2,media

		escreva("1º Nota: ")
		leia(n1)
		
		escreva("2º Nota: ")
		leia(n2)

		media=((n1+n2)/2)

		se (media>=7){
			escreva("\nAprovado ")
			}
		se (media>5 e media<7){
			escreva("\nExame ")
			
			}
			senao{
				escreva("\nReprovado ")
				}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 279; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
programa
{
	inclua biblioteca Matematica
	
	funcao inicio()
	{
		// entrada
		cadeia nome , resultado
		real n1,n2,n3,media

		escreva("Nome do aluno: ")
		leia(nome)

		escreva("1º nota: ")
		leia(n1)
		escreva("2º nota: ")
		leia(n2)
		escreva("3º nota: ")
		leia(n3)
        // processamtno
		media = (n1 +n2 + n3)/3
		media=Matematica.arredondar(media, 1)

		
		
   // saida

		se (media>=7){
		resultado=(" \nParabéns , você foi Aprovado ")
		}
		senao {
		resultado=("\nVocê foi Reprovado ")
		}
		
		escreva ("A media do " + nome + " é " + media + resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 570; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
programa
{
	
	funcao inicio()
	{
	inteiro nascimento,admissao,codigo
	inteiro idade,tempoTrabalho,ano

     escreva("Código de identificação : ")
	leia(codigo)
	
	escreva("Ano do seu nascimento : ")
	leia(nascimento)
	
	escreva("Ano de admissão : ")
	leia(admissao)
	
	ano = 2020
	idade= ano - nascimento
	tempoTrabalho= ano - admissao

	se (idade>=60 e tempoTrabalho>=20 ){
		escreva("Requer Aposentadoria ")
	}
	senao {
		se (idade>=65){
		   escreva("Requer Aposentadoria ")
			
			}
			senao {
			se(tempoTrabalho>=30){
				escreva("Requer Aposentadoria ")
				}
				senao{
					
				escreva("Não requer aposentadoria")	
					}
			}
	}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 636; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
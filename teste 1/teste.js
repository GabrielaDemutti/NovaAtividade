// let numb1 = 2;
// let numb2 = 1;
// let numb3 = 5

// if((numb1 > numb2) && (numb1 > numb3)){
//     console.log("O primeiro número é o maior")
// }else if((numb2 > numb1) && (numb2 > numb3)){
//     console.log("O segundo é o maior")
// }else if((numb3 > numb1) && (numb3 > numb2)){
//     console.log("O terceiro é o maior")
// }

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt("insira o primeiro valor: "))
// let valor2 = Number(prompt("insira o segundo valor: "))
// let operação = prompt("informe a operação desejada (+,-,/,*): ")
// let resultado = 0

// if(operação === '+') {
//     resultado = valor1 + valor2
// } else if(operação === '-'){
//     resultado = valor1 - valor2
// } else if(operação === '*'){
//     resultado = valor1 * valor2
// } else if(operação === '/'){
//     if(valor2 !== 0){
//         resultado = valor1/valor2
//     } else {
//         console.log("erro divisão por 0")
//         resultado = undefined
//     }
// } else {
//     console.log("operação inválida")
//     resultado = undefined
// }

// if(resultado !== undefined){
//     console.log("Resultado: ", resultado)
// }


// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// let número = 98

// if(número%2 == 0){
//     console.log('número par')
// } else{
//     console.log('número ímpar')
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// let idade = 61

// if (idade < 13){
//     console.log("criança")
// } else if (idade >= 13 && idade < 19){
//     console.log("adolescente")
// } else if (idade >= 19 && idade < 61){
//     console.log("adulto")
// } else {
//     console.log("idoso")
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = 1

// if (nota <= 60){
//     console.log("REPROVADO")
// } else if (nota > 60 && nota >= 70){
//     console.log("RECUPERAÇÃO")
// } else if (nota > 70){
//     console.log("APROVADO")
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let opção = 1

// switch(opção){
//     case 1:
//         console.log("a opção 1 foi selecionada")
//         break;
//     case 2:
//         console.log("a opção 2 foi selecionada")
//         break;
//     case 3:
//         console.log("a opção 3 foi selecionada")
//         break;
//     default:
//         console.log("não foi escolhida uma opção válida")
//         break;      
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let peso = 90
// let altura = 1.60

// IMC = peso/(altura * altura)

// if (IMC <= 18.5){
//     console.log("baixo peso")
// } else if (IMC > 18.5 && IMC <= 24.9){
//     console.log("peso normal")
// } else if (IMC >= 25 && IMC <= 29.9){
//     console.log("sobrepeso")
// } else if (IMC >= 30){
//     console.log("obesidade")
// }

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// let ladoA = 10
// let ladoB = 20
// let ladoC = 30

// const prompt = require('prompt-sync')()

// let opçao = Number(prompt('1: é um triagulo ou não ou 2:saber se é Isósceles, escaleno ou eqüilátero'))

// switch(opçao){
//     case 1:
//         if ((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB +ladoC > ladoA)){
//             console.log("é um triângulo")
//         } else {
//             console.log("não é um triâgulo")
//         }
//         break
//     case 2:
//         if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
//             console.log("é um Triângulo isósceles")
//         } else if ((ladoA != ladoB) && (ladoB != ladoC)){
//             console.log("é um Triângulo escaleno")
//         } else if ((ladoA == ladoB) && (ladoB == ladoC)){
//             console.log("é um Triângulo eqüilátero")
//         }
//         break                     
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let maça = 10

// let MaçaSemPromoção = maça * 0.30
// let MaçaComPromoção = maça * 0.25

// if(maça < 12){
//     console.log(`o total das maças é ${MaçaSemPromoção}`)
// } else if (maça >= 12){
//     console.log(`o total das maças é ${MaçaComPromoção}`)
// }

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let valorA = 2
// let valorB = 2

// if (valorA > valorB){
//     console.log(`a ordem dos números é ${valorA},${valorB}`)
// } else if (valorB > valorA){
//     console.log(`a ordem dos números é ${valorB},${valorA}`)
// } else if (valorB == valorA){
//     console.log("valores não válidos")
// }
   
// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.    

// for(let i = 10; i > 0; i --){
//     console.log(i)
// }

// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let i = 0

do{
    console.log(i)
    i++
} while (i == 10)




    

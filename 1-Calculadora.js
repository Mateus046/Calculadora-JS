// Declarando duas variaveieis
let numero1;
let numero2;
let resultado

//Declarando uma constante
const titulo = 'Programa de revisão - - CALCULADORA';
/* 
OPERADORES MATEMÁTICOS

+ SOMA
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO
*/

numero1 = 10;
numero2 = 2;


//SOMA
resultado = numero1 + numero2;
console.log('Soma: ' + resultado);

let saida = ('Soma: ' + resultado);
//console.log(typeof numero1);
//console.log(typeof numero2);
//console.log (typeof'Soma: ');
//console.log(typeof resultado);
//console.log(typeof saida);


//SUBTRAÇÃO
resultado = numero1 - numero2;
console.log('Subtração: ' + resultado);
//MULTIPLICAÇÃO
resultado = numero1 * numero2;
console.log('Multiplicação: ' + resultado);

//DIVISÃO
if (numero2 != 0) {
    resultado = numero1 / numero2;
    console.log('Divisão: ' + resultado);
}

else{
    console.log('IMPOSSÍVEL DIVIDIR POR (0)')
}
/*
Operadores relacionais ou de comparação:
< Menor que
> Maior que
<= Menor ou igual a
>= Maior ou igual a
!= Diferente de 
== Igual a
*/

/*
Teste lógico: Comparação de dois ou mais valores que só resultam em um de duas possibilidades Verdadeiro (True) ou Falso (False)
*/

//Exemplos de testes lógicos:
// console.log( + numero1 < numero2);//false
// console.log( + numero1 > numero2);//true
// console.log( + numero1 <= numero2);//false
// console.log( + numero1 >= numero2);//true
// console.log( + numero1 == numero2);//false
// console.log( + numero1 != numero2);//true



//Verificando os tipos das variáveis
// numero1 = 10;
// numero2 = true;
// console.log(typeof numero1);
// console.log(typeof numero2);
// console.log(typeof titulo);

//Função -> É UMA estrutura de código que executa uma tarefa específica, recebe um nome e poçde ser "chamada" por esse nome em diversas partes de um sistema.
//Estrutura de uma função no JS: "function nome_da_função(){Tarefa específica}"


/*
 ** Funções **

Funções são estruturas de código que realizam tarefas podendo ou não exigir valores externos.
Esses valores externos são chamados de parâmetros. As funções podem ser modularizadas, ou seja, criadas
em pequenos blocos de códigos independentes e que podem podem ser chamadas em várias partes em uma aplicação.
Essa chamada se dá por meio de um nome que a função recebe no momento de sua criação.
Funções podem ou não retornar valores*/


const soma = require ("./funcoes/soma");
console.log("o resultado da soma:" + soma(10, 15));
//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let num = Number(prompt("Informe o número que será calculado: "))
let fat = 1 

    for (let i = 1; i <= num; i++) {
        fat *= i
    }
    
console.log(num, "Fatorial é: ", fat)
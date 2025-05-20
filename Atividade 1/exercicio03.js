//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt('Digite a nota (0-10): '))

    if (nota < 5) {
        console.log ('Reprovado')
    } else if (nota >= 5 && nota < 7) {
        console.log('Recuperação')
    } else if (nota >= 7 && nota <= 10) {
        console.log('Aprovado')
    }
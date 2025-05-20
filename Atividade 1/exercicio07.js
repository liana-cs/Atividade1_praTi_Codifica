//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let macas = Number(prompt("Quantas maçãs foram compradas? "))
let total = 0

if (macas < 12 && compra > 0) {
    total = macas * 0.30
    console.log("Total: R$ ", total)
} else if (macas >= 12) {
    valor = macas * 0.25
    console.log("Total: R$ ", total)
} else {
    console.log("Valor invalido")
}
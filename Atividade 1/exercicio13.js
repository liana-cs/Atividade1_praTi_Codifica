//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let soma = 0
let i = 0        

    do {
        let num = Number(prompt("Digite um número decimal ou 0 para sair: "))
    
        if (num !== 0) {
            soma += num
            i++
        }
    } while (num !== 0)

    if (i > 0) {
        let media = soma / i
        console.log("Média: ", media)
    } else {
        console.log("Operação inválida")
    }
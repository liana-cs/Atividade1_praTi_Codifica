//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log ('Escolha um caminho: \n 1 - Virar à esquerda  \n 2 - Virar à direita \n 3 - Seguir em frente')

let caminho = Number(prompt('Digite o número: '))

    switch (caminho) {
    case 1:
        console.log(`Tente novamente!`)
        break
    case 2:
        console.log(`Tente novamente!`)
        break
    case 3:
        console.log(`Você chegou ao destino!`)
        break
    default:
        console.log('Opção inválida')
    }
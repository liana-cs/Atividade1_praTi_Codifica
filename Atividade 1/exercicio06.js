//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let a = Number(prompt("Lado A: "))
let b = Number(prompt("Lado B: "))
let c = Number(prompt("Lado C: "))

    if (a < b + c && b < a + c && c < a + b) {
        console.log('Os lados formam um triângulo: ')

        if (a === b && b === c) {
            console.log("Equilatero")
        } else if (a != b && b != c) {
            console.log("Escaleno")
        } else {
            console.log("Isosceles")
        }
    } else {
        console.log("Os lados não formam um triângulo")
    }
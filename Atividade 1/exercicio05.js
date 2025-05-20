//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let peso = Number(prompt("Informe o peso: "));
let altura = Number(prompt("Informe a altura: "));

let imc = peso / (altura**2);

    if (imc < 18.5) {
        console.log("IMC:", imc.toFixed(2), "Baixo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("IMC:", imc.toFixed(2), "Peso normal");
    } else if (imc >= 24.9 && imc < 29.9) {
        console.log("IMC:", imc.toFixed(2), "Sobrepeso");
    } else if (imc >= 30 ){
        console.log("IMC:", imc.toFixed(2), "Obesidade");
    }
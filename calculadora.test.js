
const { somaDoisNumeros } = require("./calculadora.js")

test("Deve somar dois números corretamente", function () {

    const numeroDois = 3;
    const numeroUm = 2;
    const resultado = somaDoisNumeros(numeroUm, numeroDois);
    expect(resultado).toBe(5);
})

faça uma função subtração que 
recebe dois números e retorna a subtração deles

function subtracao(numeroUm, numeroDois) {
    return numeroUm - numeroDois;
}
module.exports = {
    subtracao
}

const { subtracao } = require("./calculadora.js")

test("Deve subtrair dois números corretamente", function () {
    const numeroDois = 3;
    const numeroUm = 2;
    const resultado = subtracao(numeroUm, numeroDois);
    expect(resultado).toBe(-1);
}  

faça uma função multiplicação que
recebe dois números e retorna a multiplicação deles

function multiplicacao(numeroUm, numeroDois) {
        return numeroUm * numeroDois;
    }

module.exports = {
        multiplicacao
    }

const { multiplicacao } = require("./calculadora.js")

test("Deve multiplicar dois números corretamente", function () {
    const numeroDois = 3;
    const numeroUm = 2;
    const resultado = multiplicacao(numeroUm, numeroDois);
    expect(resultado).toBe(6);
})  

faça uma função divisão que 
recebe dois números e retorna a divisão deles

function divisao(numeroUm, numeroDois) {
    return numeroUm / numeroDois;
}

module.exports = {
    divisao
}

const { divisao } = require("./calculadora.js")

test("Deve dividir dois números corretamente", function () {
    const numeroDois = 3;
    const numeroUm = 6;
    const resultado = divisao(numeroUm, numeroDois);
    expect(resultado).toBe(2);
})

retorne o número 101 caso o parametro seja zero
retorne o próprio número caso o segundo parametro zero

function divisao(numeroUm, numeroDois) {
    if (numeroDois === 0) {
        return 101;
    }
    return numeroUm / numeroDois;
}

module.exports = {
    divisao
}
const { divisao } = require("./calculadora.js")

test("Deve dividir dois números corretamente", function () {
    const numeroDois = 3;
    const numeroUm = 6;
    const resultado = divisao(numeroUm, numeroDois);
    expect(resultado).toBe(2);
})

test("Deve retornar 101 caso o segundo parametro seja zero", function () {
    const numeroDois = 0;
    const numeroUm = 6;
    const resultado = divisao(numeroUm, numeroDois);
    expect(resultado).toBe(101);
})

test("Deve retornar o próprio número caso o primeiro parametro seja zero", function () {
    const numeroDois = 6;
    const numeroUm = 0;
    const resultado = divisao(numeroUm, numeroDois);
    expect(resultado).toBe(0);
})  

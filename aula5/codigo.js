console.log("Confirmando funcionamento do código.")

function pegarNum1(){
    let n1 = document.getElementById("num1").value
    return parseFloat(n1)
}

function pegarNum2(){
    return parseFloat(document.getElementById("num2").value)
}

function mostrarResult(result) {
    let localResp = document.getElementById("resp")
    localResp.innerText = "Resposta: " + result
}

function soma(n1, n2) {
    return n1 + n2
}

function subtrai(n1, n2) {
    return n1 - n2
}

function multiplica(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    if( n2 == 0){
        return 0
    } else {
        return n1 / n2
    }
}

function calcular(operacao) {
    let ope1, ope2, resposta
    ope1 = pegarNum1()
    ope2 = pegarNum2()

    if (operacao == '+'){
        resposta = soma(ope1, ope2)
    } else if (operacao == '-'){
        resposta = subtrai(ope1, ope2)
    } else if (operacao == '*') {
        resposta = multiplica(ope1, ope2)
    } else if (operacao == '/') {
        resposta = divide(ope1, ope2)
    } else {
        resposta = "Comando não reconhecido"
    }

    mostrarResult(resposta)
}
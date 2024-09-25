function calculaResultado() {

    let alt = parseFloat(document.getElementById("altura").value)
    let pes = parseFloat(document.getElementById("peso").value)

    let calculo = pes / (alt * alt)
    let resposta
    let containerImage =     document.getElementById("containerImage")
    let img = document.createElement('img')

    if (calculo >= 40) {
        resposta = "Obesidade III (mórbida)"
        img.src = "devil.png"
    } else if (calculo >= 35){
        resposta = "Obesidade grau II (severa)"
        img.src = "obesity.png"
    } else if (calculo >= 30){
        resposta = "Obesidade grau I"
        img.src = "fat.png"
    } else if (calculo >= 25){
        resposta = "Levemente acima do peso"
        img.src = "fat (1).png"
    } else if (calculo >= 18.6){
        resposta = "Peso ideal (parabéns)"
        img.src = "healthy.png"
    } else {
        resposta = "Abaixo do peso"
        img.src = "malnutrition.png"
    }

    document.getElementById("indice").innerText = calculo
    document.getElementById("situacao").innerText = resposta
    containerImage.append(img)

    guardarCookie(resposta)
}

function guardarCookie(msg){
    document.cookie = "imcClassificacao="+msg;

    localStorage.setItem('imcClassificacao', msg)

    sessionStorage.setItem('imcClassificacao', msg)
}

function ultimoImcGravado() {
    let msg = localStorage.getItem("imcClassificacao")
    if (msg) {
        alert("O último imc foi: " + msg)
    } else {
        alert("Sem dados disponiveis.")
    }
}
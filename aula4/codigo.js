let nome;
nome = "unifei";
console.log(nome);

var num1, num2;
num1 = 10;
num2 = 20;
console.log(num1 + num2);

function quaquerCoisa() {
    console.log("Dentro da função:")
    console.log(nome);
    console.log(num1);
}

quaquerCoisa();

function soma(x, y) {
    return x + y;
}

let resp = soma(10, 30)

console.log("A soma é: ", resp)

function aviso() {
    console.log("Aviso qualquer!")
}

aviso()

//Funções anonimas
let dezena = function () {
    return 10;
}

console.log(soma(10, dezena()))

let aleatorio = function () {
    return Math.random();
}

console.log(aleatorio())

//arrow function
let w = () => {
    return 20;
}

//ou 
//let w = () => 20;

console.log(w())

function mensagens() {
    setTimeout(() => {
        console.log("Primeira mensagem");
    }, 5000);
    setTimeout(() => {
        console.log("Segunda mensagem");
    }, 3000);
    setTimeout(() => {
        console.log("Terceira mensagem");
    }, 1000);
}

//mensagens();

//--------------------------------------------------------------------

//Tipo de dado Array
let nomes = []; //um array vazio
nomes.push("Felipe")
nomes.push(20)
nomes[4] = "Eduardo"
nomes[-1] = "Miguel";
nomes.push("unifei")

nomes.unshift("iTabira")

console.log(nomes.pop())

delete nomes[2]

console.log(nomes)

let excluidos = nomes.splice(1, 2);
console.log(excluidos)

console.log(nomes)

let produtos = ["lapis", "borracha", "caneta"]
console.log(produtos)
let coisas = ["apontador", "pepel", ...produtos] //sem os ... ele adiciona o vetor todo
console.log(coisas)

let [c1, ...c2] = produtos
console.log(c2)

for (let p of produtos) {
    console.log("Produto na lista: ", p);
}

produtos.forEach((prod) => {
    console.log(prod.toUpperCase());
}
);

for (let [indice, prod] of produtos.entries()) {
    console.log("O produto", prod, "está no índice: ", indice);
}


//map
let precos = [300.3, 249, 100.5];
let precosDescontados = precos.map((p) => {
    let desconto = p * 0.1;
    return p - desconto;
});
console.log(precos);
console.log(precosDescontados);
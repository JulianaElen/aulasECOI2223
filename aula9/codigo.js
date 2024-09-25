console.log("Teste arquivo js")

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json()
            .then((resp2) => mostraUsers(resp2)))
        .catch((error) => console.log("Ocorreu um ERRO: " + error))
        .finally()
}

function mostraUsers(users) {
    let local = document.getElementById("nomesUsuarios")

    users.forEach((user) => {
        let p = document.createElement('p')
        p.innerText = user.name;
        local.append(p);
    });
}

function getRandom() {
    fetch("https://randomuser.me/api/")
        .then((resp) => resp.json()
            .then((resp2) => mostrarRandom(resp2)))
        .catch((error) => console.log("Ocorreu um ERRO: " + error))
        .finally()
}

function mostrarRandom(random){
    let local = document.getElementById("nomeImagem")

    random.results.forEach(
        (user) => {
            let p = document.createElement('p')
            p.innerText = user.name.first;
            local.append(p);
            let img = document.createElement('img')
            img.src = user.picture.medium
            local.append(img)
        }
    )
}
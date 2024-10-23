function getUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((usuarios) => {
      const tableBody = document.querySelector("#tabelaUsuarios tbody");

      usuarios.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.address.city}</td>
                    <td>${usuario.phone}</td>
                    <td><a href="http://${usuario.website}" target="_blank">${usuario.website}</a></td>
                    <td>${usuario.company.name}</td>`;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
    });
}

getUsuarios();

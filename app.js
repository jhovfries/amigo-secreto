// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function AgregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo === "") {
        alert("Debe ingresar un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    RenderizarAmigo();
}

function RenderizarAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function SortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
    resultado.style.color = "green";
}
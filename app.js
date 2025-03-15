//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let listaAmigos = document.getElementById('listaAmigos');

let resultado = document.getElementById('resultado');

function adicionarAmigo() {

    let nomeDigitado = document.getElementById('amigo').value;

    if (nomeDigitado !== '') {

        amigos.push(nomeDigitado);

        document.getElementById('amigo').value = '';

        listaAmigos.innerHTML = '';

        for (amigo of amigos) {
            let itemLista = document.createElement('li');
            itemLista.textContent = amigo;
            listaAmigos.appendChild(itemLista);
        }

    }
    else
        alert('Por favor, insira um nome.');

};

function sortearAmigo() {

    if (amigos == '') {

        alert('Por favor, insira um nome.');

    }
    else {

        let indiceArray = Math.floor(Math.random() * amigos.length);

        let amigoSorteado = amigos[indiceArray];

        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;

        listaAmigos.innerHTML = '';

        amigos = [];
    }

};


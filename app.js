//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.



let amigos = [];

let listaAmigos = document.getElementById('listaAmigos').innerHTML = 'TESTE';

let resultado = document.getElementById('resultado').innerHTML = '1234';



function adicionarAmigo(event){

    let nomeDigitado = document.getElementById('amigo').value;

    if (nomeDigitado !== '') {

        amigos.push(nomeDigitado);

        console.log(amigos);
    }

    for (let i = 0; i < amigos.length; i++) {

        let texto = amigos.toString();

        listaAmigos.value = texto;


        // console.log(amigos[i]);

        // const element = array[index];
        
    }

        if(nomeDigitado == ''){
            alert('Por favor, insira um nome.');
        }

};

 

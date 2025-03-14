//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


let listaAmigos = document.getElementById('listaAmigos').innerHTML = '';

let resultado = document.getElementById('resultado').innerHTML = '';

function adicionarAmigo(event){
    let nomeDigitado = document.getElementById('amigo').value;

        if (nomeDigitado == ''){
           alert('Por favor, insira um nome.');
          
        }

        else{
            amigos.push(nomeDigitado);
            
        }
        
};

amigos.forEach(amigo => {

    console.log(amigo)
    
}); 

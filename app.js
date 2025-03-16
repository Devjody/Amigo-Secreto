//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosSorteados = [];

function adicionarAmigo() {

    let ul = document.getElementById("listaAmigos");
    let input = document.getElementById("amigo");
    listaDeAmigosSorteados.push(document.getElementById("amigo").value);
    
    if (input.value.trim() !== "") { // Verifica se o campo não está vazio
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
    }else{
        alert("Insira um texto!");
    }
    console.log(listaDeAmigosSorteados);
    limparCampo();
}

function sortearAmigo(){
    if (listaDeAmigosSorteados.length>0){
        let sorteado = listaDeAmigosSorteados[Math.floor(Math.random() * listaDeAmigosSorteados.length)];
        let ul = document.getElementById("resultado");
        let li = document.createElement("li");
        li.textContent = `Parabéns, o sorteado foi: ${sorteado}`;
        ul.appendChild(li);
        esconderLista();
    }else{
        alert("Lista de amigos vazia. Insira algo antes de clicar!");
    }
  
}

function esconderLista() {
    document.getElementById("listaAmigos").style.display = "none";
}

function limparCampo(){
    limpar = document.querySelector('input');
    limpar.value = '';
}


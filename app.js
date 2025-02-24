// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim(); 

    // Validação: impede nomes vazios
    if (nome === "") { 
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos.push(nome); 
    atualizarLista(); 

    inputAmigo.value = ""; 
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");  
        li.textContent = amigos[i];             
        listaAmigos.appendChild(li);            
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("Nenhum nome foi adicionado!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceSorteado]; 

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

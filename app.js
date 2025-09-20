// Array para armazenar a lista de amigos.
let amigos = [];

/**
 * Função para adicionar um novo amigo à lista.
 */
function adicionarAmigo() {
    // 1. Obter o nome do amigo do campo de input.
    let nomeInput = document.getElementById('amigo');
    let nomeAmigo = nomeInput.value.trim(); // .trim() remove espaços em branco no início e fim.

    // 2. Validar se um nome foi realmente digitado.
    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo!');
        return; // Para a execução da função aqui.
    }

    // 3. Validar se o nome já existe na lista (evitar duplicados).
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, digite um nome diferente.');
        nomeInput.value = ''; // Limpa o campo
        return;
    }

    // 4. Adicionar o nome ao array 'amigos'.
    amigos.push(nomeAmigo);

    // 5. Atualizar a lista de amigos na tela.
    atualizarListaAmigos();

    // 6. Limpar o campo de input e focar nele novamente.
    nomeInput.value = '';
    nomeInput.focus();
}

/**
 * Função para realizar o sorteio do amigo secreto.
 */
function sortearAmigo() {
    // 1. Validar se há pessoas suficientes para o sorteio.
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    // 2. Embaralhar a lista de amigos (Algoritmo de Fisher-Yates).
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Troca de elementos
    }

    // 3. Exibir o resultado do sorteio na tela.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores.

    for (let i = 0; i < amigos.length; i++) {
        // O último da lista tira o primeiro para fechar o ciclo.
        let amigoSorteado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];

        // Adiciona a linha do sorteio ao HTML.
        resultado.innerHTML += `<li>${amigos[i]} 🎁 -> ${amigoSorteado}</li>`;
    }
}


/**
 * Função para atualizar a exibição da lista de amigos na tela.
 */
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar.

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento <li> para cada amigo.
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/**
 * Função para reiniciar o sorteio, limpando todos os dados.
 */
function reiniciar() {
    amigos = []; // Esvazia o array
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}

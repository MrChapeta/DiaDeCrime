const passos = document.querySelectorAll('.passo');

function mostrarPasso(id) {
    passos.forEach(passo => {
        passo.classList.remove('ativo');
    });
    document.getElementById(`passo-${id}`).classList.add('ativo');
}

document.querySelectorAll('.btn-proximo').forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoPasso = botao.getAttribute('data-proximo');
        const escolha = botao.getAttribute('data-escolha');

        // Armazena a escolha inicial
        if (escolha) {
            localStorage.setItem('escolhaInicial', escolha);
        }

        // Mostra o próximo passo ou finaliza
        if (proximoPasso.startsWith('final')) {
            const escolhaFinal = localStorage.getItem('escolhaInicial');
            mostrarPasso(`final-${escolhaFinal}`);
        } else {
            mostrarPasso(proximoPasso);
        }
    });
});

// Inicia a história no passo 0
mostrarPasso(0);

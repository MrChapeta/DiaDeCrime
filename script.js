let escolhaInicial = ""; // Variável para armazenar a escolha inicial
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const escolha = this.getAttribute('data-escolha'); // Obter a escolha inicial, se houver

        // Armazenar a escolha inicial, caso seja a primeira vez
        if (escolha) {
            escolhaInicial = escolha;
        }

        // Verifica se estamos indo para o final
        if (proximoPasso === 'passo-final') {
            if (escolhaInicial === 'luizao') {
                mostrarPasso('passo-final-luizao');
            } else if (escolhaInicial === 'renan') {
                mostrarPasso('passo-final-renan');
            } else {
                mostrarPasso('passo-final-ninguem');
            }
        } else {
            // Avança para o próximo passo normalmente
            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        }
    });
});

// Função para mostrar o passo correto
function mostrarPasso(passoId) {
    document.querySelectorAll('.passo').forEach(passo => {
        passo.classList.remove('ativo');
    });
    document.getElementById(passoId).classList.add('ativo');
}

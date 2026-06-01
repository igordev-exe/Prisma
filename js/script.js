// Script para Prisma

// Event listener para o botão "Começar Agora"
document.addEventListener('DOMContentLoaded', function() {
    const btnComeccar = document.querySelector('.hero .btn-primary');
    if (btnComeccar) {
        btnComeccar.addEventListener('click', function() {
            const cursosSection = document.querySelector('#cursos');
            cursosSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Event listeners para os botões "Saiba Mais"
    const btnsSaibaMais = document.querySelectorAll('.curso-card .btn-secondary');
    btnsSaibaMais.forEach(btn => {
        btn.addEventListener('click', function() {
            const cursoNome = this.parentElement.querySelector('h3').textContent;
            alert(`Você selecionou o curso: ${cursoNome}\n\nEm breve, mais informações sobre este curso!`);
        });
    });

    // Event listener para o formulário de contato
    const formContato = document.querySelector('.form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const mensagem = this.querySelector('textarea').value;

            if (nome && email && mensagem) {
                alert(`Obrigado, ${nome}!\n\nSua mensagem foi recebida. Responderemos em breve no email: ${email}`);
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
});

// Função para adicionar classe ativa ao navegar
window.addEventListener('scroll', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.scrollY > 50) {
        navMenu.style.animation = 'none';
    }
});

// Função auxiliar para validação de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Log de inicialização
console.log('Prisma - Script carregado com sucesso!');
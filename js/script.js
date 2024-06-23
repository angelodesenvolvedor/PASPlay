// script.js

// Função para navegação suave
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Fechar o menu ao clicar em um link
        let navbarToggler = document.querySelector('.navbar-toggler');
        let navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Função para ativar o item do menu correspondente à seção visível
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('.section');
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPos + 200 >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelector('.nav-link.active')?.classList.remove('active');
            let id = section.getAttribute('id');
            document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
        }
    });
});

// Função para filtrar cartões de filmes, séries e documentários
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let searchTerm = document.querySelector('input[type="search"]').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
});

// Função para voltar à página inicial e mostrar todos os itens
document.getElementById('resetSearch').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.parentElement.style.display = 'block';
    });

    // Limpar o campo de pesquisa
    document.querySelector('input[type="search"]').value = '';

    // Rolar até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

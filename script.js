document.addEventListener('DOMContentLoaded', () => {
    const whatsappButton = document.getElementById('whatsapp-button');
    const link = whatsappButton.querySelector('a');

    // Adicionar efeito de rotação no ícone ao hover
    link.addEventListener('mouseover', () => {
        link.querySelector('svg').style.transform = 'rotate(12deg)';
    });

    link.addEventListener('mouseout', () => {
        link.querySelector('svg').style.transform = 'rotate(0deg)';
    });
});
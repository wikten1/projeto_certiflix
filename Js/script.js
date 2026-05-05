const menuMobile =
document.getElementById('menu-mobile');
const navMenu = 
document.querySelector('.menu-nav');

menuMobile.addEventListener('click', () =>
{
    menuMobile.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-nav').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Lógica de abas dos cursos
const courseTabs = document.querySelectorAll('.course-tab');
const courseAreas = document.querySelectorAll('.course-area');

courseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remover classe active de todas as abas e áreas
        courseTabs.forEach(t => t.classList.remove('active'));
        courseAreas.forEach(area => area.classList.remove('active'));

        // Adicionar classe active na aba clicada
        tab.classList.add('active');

        // Mostrar a área correspondente
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});
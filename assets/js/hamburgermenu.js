document.querySelector('.hamburger-menu').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

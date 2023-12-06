document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('myHamburgerMenu');
    const nav = document.querySelector('header nav');

    // Function to be executed when the hamburger menu is clicked
    function handleHamburgerClick() {
        // Toggle the 'active' class on both the hamburger menu and the navigation menu
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');

        // You can add additional actions here if needed
        console.log('Hamburger menu clicked!');
    }

    // Add click event to the hamburger menu
    hamburgerMenu.addEventListener('click', handleHamburgerClick);
});

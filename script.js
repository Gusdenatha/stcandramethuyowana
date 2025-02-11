document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav .menu");
    const menuLinks = document.querySelectorAll("nav .menu ul li a");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Menutup menu saat salah satu link diklik (hanya untuk mobile)
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 768) { // Hanya berlaku di tampilan mobile
                    menu.classList.remove("active");
                    menuToggle.classList.remove("active");
                }
            });
        });
    }
});

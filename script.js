// script-navbar.js
document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarNav = document.querySelector("#navbarNav");
    var navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 992) { 
                navbarToggler.click();
            }
        });
    });
});

// script-audio.js
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("backsound");
    let btnToggle = document.getElementById("toggleAudio");

    btnToggle.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            btnToggle.innerHTML = "🔊 Pause";
        } else {
            audio.pause();
            btnToggle.innerHTML = "🔈 Play";
        }
    });
});



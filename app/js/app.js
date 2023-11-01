const menuBurger = document.querySelector(".menu-burger");

if (menuBurger) {
    const menu = document.querySelector(".menu");
    menuBurger.addEventListener("click", function() {
        document.body.classList.toggle("lock")
        menu.classList.toggle("active");
        menuBurger.classList.toggle('active')
    });
}


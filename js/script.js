(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", () => {
        refs.menu.classList.add("open");
    });

    refs.closeMenuBtn.addEventListener("click", () => {
        refs.menu.classList.remove("open");
    });

    // Закриття меню при кліку на посилання
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            refs.menu.classList.remove("open");
        });
    });
})();

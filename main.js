// mostrare / nascondere il menu principale (mobile)
const bottoneHmenu = document.querySelector (" .hamburger-menu");
const bottoneAperto = document.querySelector (" .fa-bars");
const bottoneChiuso = document.querySelector (".fa-times");

bottoneAperto.addEventListener(`click`,
function() {
    bottoneHmenu.classList.add("active");
});

bottoneChiuso.addEventListener(`click`,
function() {
    bottoneHmenu.classList.remove("active");
});
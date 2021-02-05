window.addEventListener("scroll", function() {
    const logoImage = document.querySelector
    (".logo img");
    const mainNav = document.getElementById
    ("mainNav");

    if (window.pageYOffset > 100) {
        logoImage.style.height = "64px";
        mainNav.classList.add("bg-inherit");
        mainNav.classList.add("txt-peachpuff");
    } else {
        logoImage.style.height = "94px";
        mainNav.classList.remove("bg-inherit");
        mainNav.classList.remove("txt-peachpuff");
    }
});
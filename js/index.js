let slideIndex = 1;
function mostrarDiapositiva(n) {
    let i;
    const diapositivas = document.getElementsByClassName("diapositiva");
    const dots = document.getElementsByClassName("dot");
    if (n > diapositivas.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = diapositivas.length;
    }
    for (i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    diapositivas[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    resetInterval();
}
function avanzar(n) {
    slideIndex += n;
    mostrarDiapositiva(slideIndex);
}
function retroceder(n) {
    slideIndex -= n;
    mostrarDiapositiva(slideIndex);
}
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
prevButton.addEventListener("click", function () {
    retroceder(1);
});
nextButton.addEventListener("click", function () {
    avanzar(1);
});


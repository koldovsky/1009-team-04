const goUpBtn = document.querySelector(".go-up-button");

goUpBtn.addEventListener("click", goUp);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        goUpBtn.classList.add("go-up-button--show");
    } else {
        goUpBtn.classList.remove("go-up-button--show");
    }
}

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

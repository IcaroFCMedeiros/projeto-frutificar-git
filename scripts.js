window.onscroll=function(){roll()};
function roll(){
    if(document.body.scrollTop > 80, document.documentElement.scrollTop > 80){
        document.getElementsByTagName("header")[0].style.opacity="0.8";
        document.getElementById("home").style.opacity="1";
    }else {
       document.getElementsByTagName("header")[0].style.opacity="1";
       document.getElementById("home").style.opacity="1";
    }
}

const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
    if (event.type === "touchsart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () => {
        nav.classList.remove("active");
    });
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement;
    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) {
            targetElement.removeAttribute("data-target");
            html.removeEventListener("click", handleHTMLClick);
            html.removeEventListener("touchstart", handleHTMLClick);
            callback();
        }
    }
    if (!targetElement.hasAttribute("data-target")) {
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target", "");
    }
}

function setAria() {
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded, isActive");
    if (isActive) {
        btnMenu.setAttribute("aria-label", "Fechar Menu");
    }
    else {
        btnMenu.setAttribute("aria-label", "Abrir Menu");
    }
}


btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick );

let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++



    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => { nextImage() }, time)
}


window.addEventListener("load", start)

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItens = items.length;
controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) { currentItem -= 1; }
        else { currentItem += 1; }

        if (currentItem >= maxItens) { currentItem = 0; }
        if (currentItem < 0) { currentItem = maxItens - 1; }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({ inline: 'center', behavior: 'smooth' });

        items[currentItem].classList.add('current-item');
    })
})

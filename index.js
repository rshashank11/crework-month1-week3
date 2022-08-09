let btn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");

function toggleList() {
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

btn.addEventListener("click", toggleList);
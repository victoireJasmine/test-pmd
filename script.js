const $close = document.querySelectorAll(".close-items");
const $menu = document.querySelectorAll(".burger-menu");
const $navHeader = document.querySelector(".header .nav-side-menu");
if ($close) {
    $close.forEach(element => {
        element.addEventListener("click", closeMenu)
    });
}
if ($menu) {
    $menu.forEach(element => {
        element.addEventListener("click",openMenu)
        
    });
    
}
function openMenu(){
    $navHeader.classList.add("show");
    
}
function closeMenu(){
    $navHeader.classList.remove("show");
}

const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");

 menuIcon.addEventListener("click", ()=>{
    if(menu.className === "hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden")
    }
 })
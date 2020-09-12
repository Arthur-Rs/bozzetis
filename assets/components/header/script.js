const tabMenu = document.querySelector("#header-tab-menu");
const menuButton = document.querySelector("#header-tab-menu-btn");
const header = document.querySelector("#header")

let menuIsOpen = false;

menuButton.addEventListener("click", () => {
  if (menuIsOpen) {
    tabMenu.classList.remove("open");
    menuIsOpen = !menuIsOpen;
    return;
  }

  menuIsOpen = !menuIsOpen;
  tabMenu.classList.add(["open"]);
});


window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 10){
    header.classList.add("hide")
    return
  }

  header.classList.remove("hide")
})
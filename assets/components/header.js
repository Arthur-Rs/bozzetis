const tabMenu = document.querySelector("#header-tab-menu");
const menuButton = document.querySelector("#header-tab-menu-btn");
let menuIsOpen = false;

menuButton.addEventListener("click", () => {
  console.log("1");
  if (menuIsOpen) {
    console.log("2");
    tabMenu.classList.remove("open");
    menuIsOpen = !menuIsOpen;
    return;
  }

  console.log("3");
  menuIsOpen = !menuIsOpen;
  tabMenu.classList.add(["open"]);
});

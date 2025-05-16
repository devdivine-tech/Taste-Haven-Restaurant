const mobileMenuBar = () => {
  let icon = document.querySelector('.hamburger input');
  let menu = document.querySelector('#menu');
  let menuList = document.querySelectorAll('#menu li');
  let mainIcon = document.querySelectorAll('.line');
  let iconChecked = document.querySelector("#iconCheck");
  
  const dropMenu = () => {
    menu.classList.toggle("translate-y-[-102%]");
    if (!menu.classList.contains("translate-y-[-102%]")) {
      mainIcon.forEach((icon) => {
        icon.style.stroke = "#022c22";
      });
    } else {
      mainIcon.forEach((icon) => {
        icon.style.stroke = "#f59e0b";
      });
    }
  }
  icon.addEventListener("change", dropMenu);
  
  const toggleMenuIcon = () => {
    iconCheck.checked = !iconCheck.checked;
  };
  menuList.forEach((li) => {
    li.addEventListener("click", function() {
      toggleMenuIcon();
      dropMenu();
    });
  });
}

const footerDate = () => {
  let currentDate = document.querySelector("#date");
  let date = new Date().getFullYear().toString();

  currentDate.textContent = date;
}
document.addEventListener("DOMContentLoaded", () => {
  mobileMenuBar();
  footerDate();
});
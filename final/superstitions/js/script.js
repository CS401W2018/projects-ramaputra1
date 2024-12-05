//Toogle
const navbar = document.querySelector(".navbar");
//Click
document.querySelector("#nav-extra").onclick = () => {
  navbar.classList.toggle("expand");
};
//Click any
const menu = document.querySelector("#nav-extra");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("expand");
  }
});

//Toogle
const navbar2 = document.querySelector(".nav-main");
//Click
document.querySelector("#content-btn-extra").onclick = () => {
  navbar2.classList.toggle("expand2");
};

//Click any
const menu2 = document.querySelector("#content-btn-extra");
document.addEventListener("click", function (e) {
  if (!menu2.contains(e.target) && !navbar2.contains(e.target)) {
    navbar2.classList.remove("expand2");
  }
});

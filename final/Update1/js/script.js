//Toogle
const navbar = document.querySelector(".navbar");
//Click
document.querySelector("#nav-extra").onclick = () => {
  navbar.classList.toggle("expand");
};

//Toogle
const navbar2 = document.querySelector(".nav-main");
//Click
document.querySelector("#content-btn-extra").onclick = () => {
  navbar2.classList.toggle("expand2");
};

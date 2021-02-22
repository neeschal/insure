const btn = document.getElementById("nav-icon");
const menuImg1 = document.getElementById("menuImg1");
const menuImg2 = document.getElementById("menuImg2");
const nav = document.getElementById("nav");

btn.addEventListener("click", function () {
  console.log("button is clicked");
  if (menuImg2.className == "hide") {
    menuImg1.classList.add("hide");
    menuImg2.classList.remove("hide");
    nav.classList.add("view");
  } else {
    menuImg2.classList.add("hide");
    menuImg1.classList.remove("hide");
    nav.classList.remove("view");
  }
});

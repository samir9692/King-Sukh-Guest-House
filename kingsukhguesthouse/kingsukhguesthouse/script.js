const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  debugger;
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header-box p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-box h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about_img img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".aboutus_content .about-subhead", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".aboutus_content .about-head", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".aboutus_content .about-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-us-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".card-div", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service_list_box li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

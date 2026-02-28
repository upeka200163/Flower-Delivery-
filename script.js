const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
 });

 const reveals = document.querySelectorAll(".reveal");
 function revealOnscroll(){
  for(let i = 0; i < reveals.length; i++){
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    } 
  }
 }

 window.addEventListener("scroll", revealOnscroll);
 window.addEventListener("load", revealOnscroll);
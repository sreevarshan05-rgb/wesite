const sections = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {

const triggerBottom = window.innerHeight * 0.8;

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < triggerBottom){

section.style.opacity = 1;

section.style.transform = "translateY(0)";

}

});

});

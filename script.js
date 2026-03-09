// Typing animation

const typingText = [
"Data Scientist",
"Machine Learning Engineer",
"Data Analyst"
];

let count = 0;
let index = 0;

function type(){

if(count === typingText.length){
count = 0;
}

let current = typingText[count];
let letter = current.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === current.length){
count++;
index = 0;
}

setTimeout(type,100);
}

type();



// NAVBAR ACTIVE SECTION

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#"+current){
link.classList.add("active");
}

});

});



// PROJECT MODAL

function openModal(project){

const modal = document.getElementById("projectModal");
modal.style.display="block";

if(project==="baddebt"){

document.getElementById("modal-title").innerText="Bad Debt Prediction";

document.getElementById("modal-desc").innerText=
"Machine learning model predicting loan default risk using 100K+ records.";

document.getElementById("modal-img").src="assets/bad-debt.png";

document.getElementById("modal-github").href=
"https://github.com/Sreevarshan-fin/1_Bad_Debt_Prediction";

}

if(project==="creditcard"){

document.getElementById("modal-title").innerText="Credit Card Campaign";

document.getElementById("modal-desc").innerText=
"A/B testing project identifying high-potential customer segments.";

document.getElementById("modal-img").src="assets/credit-card.png";

}

}

function closeModal(){
document.getElementById("projectModal").style.display="none";
}

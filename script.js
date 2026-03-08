const typingText = [
"Data Scientist",
"Machine Learning Engineer",
"Data Analyst"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === typingText.length){

count = 0;

}

currentText = typingText[count];

letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

}

setTimeout(type,100);

})();

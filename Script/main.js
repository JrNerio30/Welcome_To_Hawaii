// Interactive Accordion

const acc = document.getElementsByClassName("accordion-content");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}
// Copyright year and Aloha :D
const currentDate = new Date();
const aloha = "Aloha"
const year = currentDate.getFullYear();
const result = `${year} ${aloha}`
 document.getElementById("copyRightYearAloha").outerHTML = result










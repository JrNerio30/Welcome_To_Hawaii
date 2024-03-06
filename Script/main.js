// Interactive Accordion

const acc = document.getElementsByClassName("accordion");
let i;
let k;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  });
}
// Copyright year and Aloha :D
const currentDate = new Date();
const aloha = "Aloha"
const year = currentDate.getFullYear();
const result = `${year} ${aloha}`
 document.getElementById("copyRightYearAloha").outerHTML = result










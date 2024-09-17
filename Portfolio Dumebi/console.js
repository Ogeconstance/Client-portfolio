/*const age = 3;
if(age >= 18) {
    console.log  ("I vote");

} else {
    console.log ("NO VOTING")
}
if (age >= 21) {
    console.log ("DRINK");
} else {
    console.log  ("NO DRINKING")
}
*/

function toggleMenu() {
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}



var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var goToLink = document.getElementById("goToLink");

var images = document.getElementsByClassName('myImages');
var currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  currentIndex = index;
  displayImage(currentIndex);
}

function closeModal() {
  modal.style.display = "none";
}

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  displayImage(currentIndex);
}

function displayImage(index) {
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
  goToLink.href = images[index].getAttribute("data-link");  // Update link

}

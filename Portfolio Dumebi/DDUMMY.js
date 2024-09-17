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

const projects = [
  {
    title: "Sprintaid Cancer Foundation",
    image: "sprintaid.webp",
    link: "https://sprintaidfoundation.org/",
    status: "Ongoing",
    description: "We believe that every person affected by cancer deserves access to the best possible care, support, and resources.",
    type: "Humanitarian Project"
  },
  {
    title: "Predicting Terrorist Attacks in Nigeria",
    image: "attack.webp",
    link: "#",
    status: "Ongoing",
    description: "Analyzing terrorism trends in Nigeria for detection, prediction, and strategic intervention recommendations.",
    type: "Humanitarian Project"
  },
  {
    title: "Alfred (AI Powered Assistant)",
    image: "alfred.webp",
    link: "https://github.com/dub-em/virtual-assistant/tree/main",
    status: "Ongoing",
    description: "LLM-powered assistant interprets plans, offers guidance, integrates LangChain, Vector Stores for institution-specific queries.",
    type: "Non-humanitarian Project"
  },
  // Add more projects here following the same format...
];

function loadProjects() {
  const projectContainer = document.getElementById("projectContainer");

  projects.forEach(project => {
    const projectHTML = `
      <div class="article-container">
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <h2 class="project-subtitle">
          <a href="${project.link}" target="_blank" style="color: rgb(161,94,73);">
            ${project.title}
          </a>
        </h2>
        <br>
        <h4><b>${project.status}</b></h4>
        <br>
        <p>${project.description}</p>
        <div class="btn-container">${project.type}</div>
      </div>
    `;

    projectContainer.innerHTML += projectHTML;
  });
}

// Load the projects when the page loads
document.addEventListener("DOMContentLoaded", loadProjects);

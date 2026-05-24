const projectCards = document.querySelectorAll(".project-card"); 
const projectShowcase = document.querySelector(".project-showcase"); 
 
if (projectCards.length && projectShowcase) { 
  const summary = document.createElement("div"); 
  summary.className = "project-summary"; 
  summary.innerHTML = ` 
    <p><strong>${projectCards.length}</strong> ervaringen worden op deze pagina uitgelicht.</p> 
    <p>Klik op een foto om die groter te bekijken.</p> 
  `; 
 
  projectShowcase.before(summary); 
} 
 
projectCards.forEach((card) => { 
  card.addEventListener("mouseenter", () => { 
    card.classList.add("is-focused"); 
  }); 
 
  card.addEventListener("mouseleave", () => { 
    card.classList.remove("is-focused"); 
  }); 
});

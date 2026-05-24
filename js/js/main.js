const zoomButtons = document.querySelectorAll(".image-zoom"); 
const lightbox = document.querySelector(".lightbox"); 
const lightboxImage = document.querySelector(".lightbox img"); 
const closeButton = document.querySelector(".lightbox-close"); 
 
function openLightbox(button) { 
  if (!lightbox || !lightboxImage) return; 
 
  const image = button.querySelector("img"); 
 
  lightboxImage.src = button.dataset.full; 
  lightboxImage.alt = image ? image.alt : ""; 
  lightbox.classList.add("open"); 
  lightbox.setAttribute("aria-hidden", "false"); 
} 
 
function closeLightbox() { 
  if (!lightbox || !lightboxImage) return; 
 
  lightbox.classList.remove("open"); 
  lightbox.setAttribute("aria-hidden", "true"); 
  lightboxImage.src = ""; 
  lightboxImage.alt = ""; 
} 
 
zoomButtons.forEach((button) => { 
  button.addEventListener("click", () => openLightbox(button)); 
}); 
 
if (lightbox) { 
  lightbox.addEventListener("click", (event) => { 
    if (event.target === lightbox) { 
      closeLightbox(); 
    } 
  }); 
} 
 
if (closeButton) { 
  closeButton.addEventListener("click", closeLightbox); 
} 
 
document.addEventListener("keydown", (event) => { 
  if (event.key === "Escape") { 
    closeLightbox(); 
  } 
}); 
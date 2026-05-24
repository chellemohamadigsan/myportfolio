const contactCard = document.querySelector(".contact-card"); 
const emailLink = document.querySelector('a[href^="mailto:"]'); 
const phoneLink = document.querySelector('a[href^="tel:"]'); 
 
function showContactToast(message) { 
  let toast = document.querySelector(".contact-toast"); 
 
  if (!toast) { 
    toast = document.createElement("div"); 
    toast.className = "contact-toast"; 
    document.body.appendChild(toast); 
  } 
 
  toast.textContent = message; 
  toast.classList.add("show"); 
 
  window.setTimeout(() => { 
    toast.classList.remove("show"); 
  }, 2200); 
} 
 
if (contactCard && emailLink) { 
  const copyButton = document.createElement("button"); 
  copyButton.className = "contact-action"; 
  copyButton.type = "button"; 
  copyButton.textContent = "Copy email"; 
 
  copyButton.addEventListener("click", async () => { 
    const email = emailLink.textContent.trim(); 
 
    try { 
      await navigator.clipboard.writeText(email); 
      showContactToast("Email copied"); 
    } catch { 
      showContactToast("Email: " + email); 
    } 
  }); 
 
  document.querySelector(".contact-copy").appendChild(copyButton); 
} 
 
if (phoneLink) { 
  phoneLink.addEventListener("click", () => { 
    showContactToast("Opening phone number"); 
  }); 
}

const colorToggle = document.getElementById("colorToggle");
const body = document.body;

colorToggle.addEventListener("change", function () {
  if (this.checked) {
    body.style.backgroundColor = "var(--dark-body)";
    body.style.color = "var(--dark-text)";
    body.style.transition ="1.5s"; 
    
  } else {
    body.style.backgroundColor = "var(--light-body)";
    body.style.color = "var(--light-text)";
    body.style.transition ="1.5s";   
  }
});

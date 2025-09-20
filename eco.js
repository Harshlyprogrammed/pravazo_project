const ecoSwitch = document.getElementById('ecoSwitch');

ecoSwitch.addEventListener('change', function() {
  if (this.checked) {
    console.log("Eco Mode: ON");
    document.body.style.transition = "background-color 0.5s ease"; // smooth transition
    document.body.style.backgroundColor = "#e0f7e9";
  } else {
    console.log("Eco Mode: OFF");
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "#f5f5f5";
  }
});

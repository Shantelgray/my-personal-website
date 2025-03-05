const h2 = document.createElement("h2");
h2.textContent = "Aspiring Coder";
document.querySelector("body").appendChild(h2);

const toggleButton = document.getElementById('toggleButton');
const toggleContent = document.getElementById("toggleContent");

toggleButton.addEventListener('click', function() {
    if(toggleContent.style.display=== 'none') {
        toggleContent.style.display = "block";
    } else {
        toggleContent.style.display = "none";
    }
});

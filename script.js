function showLetter() {
    const modal = document.getElementById("letterModal");
    modal.style.display = "block";
}

function closeLetter() {
    const modal = document.getElementById("letterModal");
    modal.style.display = "none";
}

function moveButton() {
    const noBtn = document.querySelector('.no-btn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

window.onclick = function(event) {
    const modal = document.getElementById("letterModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

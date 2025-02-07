document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("poem").style.display = "block";
    createConfetti();
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);
    
    this.style.position = "absolute";
    this.style.transition = "top 0.5s ease, left 0.5s ease";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// Function to create confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 15 + 10;
        let colors = ["#ff1493", "#ff6b6b", "#ffb6c1", "#ff69b4", "#ff3b3b", "#ff7878"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.animationDuration = `${Math.random() * 4 + 2}s`;

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add hearts in the background
window.onload = function() {
    let audio = new Audio("song.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();

    let heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts");
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-float");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
};

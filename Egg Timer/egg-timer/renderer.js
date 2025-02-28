document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            window.location.href = "timer.html"; // Open timer page
        });
    }

    const eggImages = document.querySelectorAll(".egg");
    const timerDisplay = document.getElementById("timer");
    let countdown;
    let timeLeft;
    let isPaused = false;

    eggImages.forEach(egg => {
        egg.addEventListener("mouseover", () => {
            egg.style.transform = "scale(1.1)";
        });

        egg.addEventListener("mouseleave", () => {
            egg.style.transform = "scale(1)";
        });

        egg.addEventListener("click", () => {
            const time = egg.getAttribute("data-time");
            localStorage.setItem("eggTime", time); // Store selected time
            localStorage.setItem("eggImg", egg.src); // Store selected image

            console.log(`Egg selected: ${egg.src}, Time: ${time} min`);

            window.location.href = "timer.html"; // Redirect to timer page
        });
    });

    document.getElementById("startTimer")?.addEventListener("click", startTimer);
    document.getElementById("pauseTimer")?.addEventListener("click", togglePause);

    function startTimer() {
        if (countdown) clearInterval(countdown);

        countdown = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    timerDone();
                }
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;
        timerDisplay.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    function togglePause() {
        isPaused = !isPaused;
    }

    function timerDone() {
        timerDisplay.textContent = "Egg is Ready! 🍳";

        // Remove old buttons if they exist
        document.getElementById("snooze")?.remove();
        document.getElementById("close")?.remove();

        const buttonContainer = document.createElement("div");
        buttonContainer.id = "extraButtons";
        buttonContainer.innerHTML = `
            <button id="snooze">Snooze</button>
            <button id="close">Close</button>
        `;
        document.body.appendChild(buttonContainer);

        document.getElementById("snooze").addEventListener("click", () => {
            timeLeft = 60; // 1-minute snooze
            startTimer();
            buttonContainer.remove();
        });

        document.getElementById("close").addEventListener("click", () => {
            window.close();
        });
    }
});

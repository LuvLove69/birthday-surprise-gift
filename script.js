// 1. Matrix Cyberpunk Background Effect
const canvas = document.getElementById('matrix');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const fontSize = 11;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        // Canvas အနက်ရောင် ပြန်ဖုံးပေးခြင်း
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF66'; // တောက်ပသော စိမ်းလန်းသော အရောင်
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 33);
}

// 2. Countdown Logic (3 -> 2 -> 1 -> Step 2)
let count = 3;
const displayElement = document.getElementById("display-text");

const timer = setInterval(() => {
    count--;
    if (count > 0) {
        if (displayElement) displayElement.textContent = count;
    } else {
        clearInterval(timer);
        document.getElementById("text-screen")?.classList.remove("active");
        document.getElementById("heart-screen")?.classList.add("active");
        playAudio();
    }
}, 1000);

function playAudio() {
    const music = document.getElementById("bg-music");
    if (music) {
        music.play().catch(e => console.log("Audio autoplay block:", e));
    }
}

// 3. Sticker Click -> Go to Main Page
function goToMainPage() {
    document.getElementById("heart-screen")?.classList.remove("active");
    document.getElementById("main-screen")?.classList.add("active");
    playAudio();
}

// 4. Book Flip Logic
let currentPage = 0;
function flipNextPage() {
    const pages = document.querySelectorAll('.book-page');
    if (currentPage < pages.length) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
}

// 5. Secret Timer (85s)
setTimeout(function() {
    const stickerBtn = document.getElementById("secret-sticker-btn");
    if (stickerBtn) {
        stickerBtn.style.display = "block";
    }
}, 85000);

function goToNextPage() {
    window.location.href = "final.html";
}

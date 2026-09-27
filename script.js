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
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF66';
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

// 4. Book Flip Logic & Dynamic Text Change (စာအုပ်လှန်တိုင်း စာသားပြောင်းရန်)
let currentPage = 0;
const wishes = [
    "✨ Tap the book to flip ✨",
    "💖 You are my absolute favorite person! 💖",
    "🌸 Thanks for staying by my side always 🌸",
    "✨ Make a wish and listen till the end ✨"
];

function flipNextPage() {
    const pages = document.querySelectorAll('.book-page');
    const wishTextElement = document.getElementById('wish-text');

    if (currentPage < pages.length) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;

        // အပေါ်က စာသားကို လှလှပပ ပြောင်းလဲပေးခြင်း
        if (wishTextElement && wishes[currentPage]) {
            wishTextElement.style.opacity = 0;
            setTimeout(() => {
                wishTextElement.textContent = wishes[currentPage];
                wishTextElement.style.opacity = 1;
            }, 300);
        }
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

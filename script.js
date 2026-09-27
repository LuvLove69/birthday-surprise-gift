// 1. Matrix Cyberpunk Background Effect (Neon Bright Glow)
const canvas = document.getElementById('matrix');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Neon Glow Effect (ထိန်ထိန်လေး မီးလင်းရန်)
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00FF66';
        ctx.fillStyle = '#00FF66';
        ctx.font = 'bold ' + fontSize + 'px monospace';

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
    createHeartGallery();
}

// 4. Book Flip Logic (စာအုပ် လှန်ရန်)
let currentPage = 0;
function flipNextPage() {
    const pages = document.querySelectorAll('.book-page');
    if (currentPage < pages.length) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
}

// 5. Heart Gallery Generator (ဓာတ်ပုံများဖြင့် အသည်းပုံ ဖန်တီးခြင်း)
function createHeartGallery() {
    const gallery = document.getElementById('heart-gallery');
    if (!gallery || gallery.children.length > 0) return;

    const images = ['mygirl.jpg', 'mygirl2.jpg', 'mygirl3.jpg', 'mygirl4.jpg', 'mygirl5.jpg', 'cover.jpg'];
    const totalPoints = 12;

    for (let i = 0; i < totalPoints; i++) {
        const t = (i / totalPoints) * Math.PI * 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

        const img = document.createElement('img');
        img.src = images[i % images.length];
        img.className = 'heart-photo';
        
        img.style.left = `calc(50% + ${x * 12}px)`;
        img.style.top = `calc(50% + ${y * 12}px)`;
        
        gallery.appendChild(img);
    }
}

// 6. 85-second Secret Timer
setTimeout(function() {
    const stickerBtn = document.getElementById("secret-sticker-btn");
    if (stickerBtn) {
        stickerBtn.style.display = "block";
    }
}, 85000);

// 7. Next Page Transition
function goToNextPage() {
    window.location.href = "final.html";
}

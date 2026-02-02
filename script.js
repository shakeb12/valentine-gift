// --- INDEX LOGIC ---
let noClickCount = 0;

function handleNoInteraction() {
    const noBtn = document.getElementById('no-button');
    const yesBtn = document.getElementById('yes-button');

    if (!noBtn || !yesBtn) return;

    // 1. Move No button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Change Text
    const messages = ["No", "Are you sure?", "Pookie please...", "Really??", "Think again!"];
    noBtn.innerText = messages[Math.min(noClickCount, messages.length - 1)];

    // 3. Grow Yes Button
    noClickCount++;
    const currentScale = 1 + (noClickCount * 0.2);
    yesBtn.style.transform = `scale(${currentScale})`;
}

function handleYes() {
    window.location.href = "gallery.html";
}

// --- SHARED ANIMATION ---
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    
    // Support both background div IDs
    const bgIndex = document.getElementById('heart-bg-index');
    const bgGallery = document.getElementById('heart-bg-gallery');
    
    if (bgIndex) bgIndex.appendChild(heart);
    else if (bgGallery) bgGallery.appendChild(heart);
    else document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 300);
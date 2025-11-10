function showPopup() {
    const clue = document.getElementById('clueInput').value;
    

    if (clue.trim() === '0810') {
        hideThis.classList.add('slide-up');
        appearThis.style.display = "block";
        setTimeout(() => {
            setInterval(createFloating, 300);
            
            hideThis.style.display = "none";
        }, 700);
    } else {
        confirm('The clue is our first monthsary!');
    }

}

function closePopup() {
    const popUp = document.getElementById('popUp');
    popUp.style.display = "none";
}

const yesDay = new Date("2025-08-12T00:00:00"); // YYYY-MM-DD format

  function updateLoveTimer() {
    const now = new Date();
    const diff = now - yesDay;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }

  // Update every second
  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();

  function openLetter() {
  document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
}

function openLetter() {
  document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
}

// --- Floating hearts and stars ---
const bg = document.querySelector('.floating-bg');
const symbols = ['❤️', '💖', '💘', '💫', '✨', '⭐'];

function createFloating() {
  const el = document.createElement('div');
  el.classList.add(Math.random() > 0.5 ? 'heart' : 'star');
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
  el.style.animationDuration = (Math.random() * 3 + 4) + 's';
  bg.appendChild(el);

  // remove after animation ends
  setTimeout(() => {
    el.remove();
  }, 7000);
}

// create new hearts/stars every 300ms

// Simple confetti effect using canvas
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 50 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncrement: Math.random() * 0.05 + 0.01
    });
  }
  animateConfetti();
}

function drawConfettiPiece(c) {
  ctx.beginPath();
  ctx.lineWidth = c.r;
  ctx.strokeStyle = c.color;
  ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
  ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
  ctx.stroke();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < confetti.length; i++) {
    drawConfettiPiece(confetti[i]);
    confetti[i].y += Math.cos(confetti[i].d) + 2;
    confetti[i].tiltAngle += confetti[i].tiltAngleIncrement;
    confetti[i].tilt = Math.sin(confetti[i].tiltAngle) * 15;

    if (confetti[i].y > canvas.height) {
      confetti[i].y = -10;
    }
  }
  requestAnimationFrame(animateConfetti);
}
// Load YouTube Iframe API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;

window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('yt-player');
};

function startConfetti() {
  // Start confetti animation
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 50 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncrement: Math.random() * 0.05 + 0.01
    });
  }
  animateConfetti();

  // Play song if player is ready
  if (player && typeof player.playVideo === "function") {
    player.playVideo();
  }
}

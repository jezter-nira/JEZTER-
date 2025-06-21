// Background audio element
const bgAudio = document.getElementById("bgAudio");
const volumeControl = document.getElementById("volumeControl");

// Start audio muted and paused initially (some browsers require user interaction)
bgAudio.volume = volumeControl.value;
bgAudio.pause();

// Try to play on page load (may be blocked by browser autoplay policies)
bgAudio.play().catch(() => {
  // Wait for user interaction to play
});

// Update volume on slider change
volumeControl.addEventListener("input", () => {
  bgAudio.volume = volumeControl.value;
});

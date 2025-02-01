document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const audioToggle = document.getElementById("audio-toggle");

    let isPlaying = false;

    audioToggle.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            audioToggle.textContent = "🔇";
        } else {
            audio.play();
            audioToggle.textContent = "🎵";
        }
        isPlaying = !isPlaying;
    });
});

const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");

const lyricsData = [
    { text: "At the time", time: 15 },
    { text: "The whisper of birds", time: 18 },
    // ... (resto de las letras)
];

function updateLyrics() {
    const time = Math.floor(audio.currentTime);
    const currentLine = lyricsData.find(line => time >= line.time && time < line.time + 6);

    if (currentLine) {
        const fadeInDuration = 0.1;
        const opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);
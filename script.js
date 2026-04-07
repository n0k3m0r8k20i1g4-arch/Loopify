let mood = "focus";

const musicData = [
  {
    title: "Lo-fi Focus",
    mood: "focus",
    src: "music1.mp3"
  },
  {
    title: "Deep Work Beat",
    mood: "focus",
    src: "music2.mp3"
  },
  {
    title: "Chill Relax",
    mood: "relax",
    src: "music3.mp3"
  }
];

function setMood(selected) {
  mood = selected;
  renderTracks();
}

function renderTracks() {
  const container = document.getElementById("tracks");
  container.innerHTML = "";

  const filtered = musicData.filter(track => track.mood === mood);

  filtered.forEach(track => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerText = track.title;
    div.onclick = () => play(track.src);
    container.appendChild(div);
  });
}

function play(src) {
  const player = document.getElementById("player");
  player.src = src;
  player.play();
}

// 初期表示
renderTracks();

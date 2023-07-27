console.log("Hellow ");
// initializing variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "We Are!",
    filepath: "songs/1.mp3",
    coverpath: "covers/cover1.jpg",
  },
  {
    songName: "Wano-music-Komurasaki",
    filepath: "songs/2.mp3",
    coverpath: "covers/cover2.jpg",
  },
  {
    songName: "Soul_King-New-World",
    filepath: "songs/3.mp3",
    coverpath: "covers/cover3.jpg",
  },
  {
    songName: "Binks-no-sake-Brook",
    filepath: "songs/4.mp3",
    coverpath: "covers/cover4.jpeg",
  },
  {
    songName: "Soul_King-New-World",
    filepath: "songs/5.mp3",
    coverpath: "covers/cover5.jpg",
  },
  {
    songName: "Robin Theme",
    filepath: "songs/6.mp3",
    coverpath: "covers/cover6.jpg",
  },
  {
    songName: "Chopper Theme",
    filepath: "songs/7.mp3",
    coverpath: "covers/cover7.jpg",
  },
  {
    songName: "Franky Theme",
    filepath: "songs/8.mp3",
    coverpath: "covers/cover8.jpg",
  },
  {
    songName: "Nami Theme",
    filepath: "songs/9.mp3",
    coverpath: "covers/cover9.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
// play pause on click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", () => {
  // update seekbars
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      masterSongName.innerText = songs[songIndex - 1].songName;
    });
  }
);

// next previous
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  masterSongName.innerText = songs[songIndex - 1].songName;
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

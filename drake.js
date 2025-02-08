'use strict';
// Variables
const image = document.getElementById('cover'),
  title = document.getElementById('music-title'),
  artist = document.getElementById('music-artist'),
  playerProgress = document.getElementById('player-progress'),
  progress = document.getElementById('progress'),
  currentEL = document.getElementById('current-time'),
  durationEL = document.getElementById('duration'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  playingFrom = document.getElementById('playing-from'),
  round = document.querySelector('.round'),
  wave = document.querySelectorAll('#stroke'),
  playBtn = document.getElementById('play'),
  back = document.querySelector('.fa-arrow-left'),
  reset = document.querySelector('.fa-refresh');

const music = new Audio();

const songArray = [
  // For music cover and...
  {
    path: 'audio/drake/Drake - The Catch Up.mp3',
    displayName: 'The Catch Up',
    cover: 'images/drake/-0-To-100-_-The-Catch-Up-.jpg',
    artist: 'Drake',
  },
  {
    path: 'audio/drake/32. Look Alive.mp3',
    displayName: 'Look Alive',
    cover: 'images/drake/Look alive.jpg',
    artist: 'Drake',
  },
  {
    path: 'audio/drake/drake_-_tried_our_best.mp3',
    displayName: 'Tried Our Best',
    cover: 'images/drake/Tried our best.jpg',
    artist: 'Drake',
  },
  {
    path: 'audio/drake/02. Gods Plan.mp3',
    displayName: 'Gods Plan',
    cover: `images/drake/God's plan.jpg`,
    artist: 'Drake',
  },
];
let musicIndex = 0;
let isPlaying = false;
// Function

function isPlayingFrom() {
  playingFrom.textContent = `${musicIndex + 1} is playing from ${
    songArray.length
  } `;
}
isPlayingFrom();

function playMusic() {
  // Play and change icon if is true
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  round.style.animationPlayState = 'running';
  for (let i = 0; i < wave.length; i++) {
    wave[i].style.display = 'block';
    wave[i].style.animationPlayState = 'running';
  }
  music.play();
}
function pauseMusic() {
  // Pause and change icon if is false
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  round.style.animationPlayState = 'paused';
  for (let i = 0; i < wave.length; i++) {
    wave[i].style.display = 'none';
    wave[i].style.animationPlayState = 'paused';
  }
  music.pause();
}

function toggle() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
}
function changeMusic(direction) {
  // musicIndex = (musicIndex + direction + songArray.length) % songArray.length;
  // Example 0 = (0 + 1 + 4) % 4 = 1
  musicIndex = (musicIndex + direction + songArray.length) % songArray.length;
  loadMusic(songArray[musicIndex]);
  playMusic();
  isPlayingFrom();
}
function updateProgressBar() {
  // progressPercent = (currentTime / duration) * 100;
  // Example (2:00 / 4:00) * 100 = 50%
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // Format time to math.floor and string it's round any number in lower. you can do it in arrow function
  // Example current = (current / 60) (current %60)
  const formatTime = time => String(Math.floor(time)).padStart(2, '0');
  durationEL.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentEL.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}
function setProgressBar(e) {
  // Music.currentTime = (clickX / width) * music.duration;
  // Example 2:00(400 / 800)*4:00
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

// Event
playBtn.addEventListener('click', toggle);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);
reset.addEventListener('click', function () {
  music.currentTime = 0;
});
back.addEventListener('click', function () {
  open('music.html');
});
loadMusic(songArray[musicIndex]);

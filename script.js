function adjustLogo() {
  const nav = document.querySelector("nav");
  const logo = document.getElementById("logo");
  const items = document.getElementById("items");

  if (logo && items && nav) {
    const totalWidth = 270 + items.offsetWidth;
    logo.src =
      totalWidth > nav.offsetWidth ? "./media/small.svg" : "./media/large.svg";
  }
}

function resizeThings() {
  const songs = document.getElementById("songs");
  const projects = document.getElementById("projects");
  songs.style.height = document.querySelector("main").offsetHeight - 30 + "px";
  projects.style.height =
    document.querySelector("main").offsetHeight - 30 + "px";
  projects.style.width = document.querySelector("main").offsetWidth + "px";
  if (!window.width < document.querySelector("main").offsetWidth)
    document.querySelector("nav").style.maxWidth = `${
      document.querySelector("main").offsetWidth
    }px`;
  else document.querySelector("nav").style.maxWidth = `100%`;
  document.querySelector("nav").style.padding = `0 calc(50% - ${
    document.querySelector("main").offsetWidth / 2
  }px`;
}

resizeThings();

adjustLogo();
window.addEventListener("resize", adjustLogo);
window.addEventListener("load", adjustLogo);

const namesContainer = document.querySelector(".scrolling-names");
const names = namesContainer.querySelectorAll("span");
let currentIndex = 1;

function scrollNames() {
  namesContainer.style.transform = `translateY(-${currentIndex * 32}px)`;
  namesContainer.style.transition = "transform 0.5s ease";

  currentIndex++;
  if (currentIndex >= names.length) {
    setTimeout(() => {
      namesContainer.style.transition = "none";
      namesContainer.style.transform = "translateY(0)";
      currentIndex = 1;
    }, 500);
  }
}

setInterval(scrollNames, 2000);

function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  };
  const newYorkTime = now.toLocaleTimeString("en-US", options);
  document.getElementById("time").textContent = newYorkTime;
}

updateTime();
setInterval(updateTime, 5000);

let key = "AIzaSyA4ZxhkApuvWHxhFybbbYcCUno-dNflWgg";
let list = "PLrF3JmCm8j0OQthA_VpRV3RpVy8MrOnWh";
async function getPlaylistItems(pageToken = "") {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${list}&key=${key}&pageToken=${pageToken}`;
  const response = await fetch(url);
  const data = await response.json();
  data.items.forEach((song, i) => {
    const name = song.snippet.title;
    const artist = song.snippet.videoOwnerChannelTitle;
    const thumb = song.snippet.thumbnails.default.url;
    const songCard = document.createElement("div");
    const img = document.createElement("img");
    img.alt = `Song "${name}" thumbnail`;
    const nameSpan = document.createElement("span");
    const artistSpan = document.createElement("span");
    songCard.classList.add("song");
    songCard.classList.add("ssgrower");
    nameSpan.classList.add("name");
    artistSpan.classList.add("artist");
    img.src = thumb;
    nameSpan.innerText = name;
    artistSpan.innerText = artist.replace(" - Topic", "");
    songCard.appendChild(img);
    songCard.appendChild(nameSpan);
    songCard.appendChild(artistSpan);
    songCard.onclick = () => {
      playSong(song.snippet.resourceId.videoId);
    };
    songCard.onkeydown = (event) => {
      if (event.key === "Enter") {
        songCard.click();
      }
    };
    songCard.tabIndex = 0;
    if (i == data.items.length - 1) songCard.style.marginBottom = 0;
    document.getElementById("songs").appendChild(songCard);
  });
}

getPlaylistItems();

function playSong(id) {
  const frame = document.getElementById("frame");
  frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&loop=1&rel=0&modestbranding=1`;
  frame.classList.add("playing");
  document.getElementById("songs").scrollTo({ top: 0, behavior: "smooth" });
}

const frame = document.getElementById("frame");
frame.src = ``;

function projects(dir) {
  document.querySelector(".projects").scrollBy({
    left: document.querySelector("main").offsetWidth * dir,
    behavior: "smooth",
  });
}

function updateUILayout() {
  const body = document.body;
  if (window.innerWidth < 1110) {
    body.classList.add("mobile-ui");
  } else {
    body.classList.remove("mobile-ui");
  }
}

updateUILayout();
window.addEventListener("resize", updateUILayout);

const fuckAssQuotes = [
  "Skibidi Toilet",
  "BITE ME TILL YOU DRAW BLOOD!!! X3",
  "My friend says my specials :3",
  "Can you do a backflip?",
  "Oh yea, its gambling time",
  "I forgor",
  "So true",
  "Aka... I'm pregnant...",
  "Chat is this rizz?",
  "Hey sweetness!!",
  "Blocked.",
  "Triangle",
  "Nerbler",
  "Wegmans",
  "Perkins",
  "Sensational!!",
  "Enjoy it while it lasts",
  "Me plus you is good math!",
  "You the man, big stan",
  "Mini-freakoid",
  "Damn girl you got DID? Any of them <i>𝓯𝓻𝓮𝓪𝓴𝔂</i>?",
  "Thats not very yummy...",
  "Stares at you with my EVIL eyes",
  "EVIL Aka was here~",
  "You can call me captain ravioli",
  "All my therapists left me",
  "I am all of me!! (Gay. I'm gay.)",
  "ST!Aka x ET!Aka",
  "Rip and tear",
  "You can now play as Luigi",
  "You can do this girl!",
  "MY NUTS!!!",
  "It would be so awesome",
  "It would be so cool",
  "Fuck<br>Normalcy<br>And organization",
  "Norway!!",
  "Meow",
  "This gonna be you soon.",
  ":head_shaking_vertically:",
  "Akademic Technologies",
  "Fuck ass quote here",
  "I beg your pardon?",
  "Reconsider.",
  "<span class='txt-big'>Big text</span>",
  "<span class='txt-small'>Small text</span>",
  "<a href='https://youtube.com/watch?v=dQw4w9WgXcQ'>Click here for free Aka boobs</a>",
];
document.getElementById("quote").innerHTML =
  fuckAssQuotes[Math.floor(Math.random() * fuckAssQuotes.length)];

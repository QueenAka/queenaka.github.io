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
  const main = document.querySelector("main");
  const songs = document.getElementById("songs");
  const projects = document.getElementById("projects");
  const github = document.getElementById("github");
  const activity = document.getElementById("activity");
  const scratch = document.getElementById("scratch");
  songs.style.height = main.offsetHeight - 30 + "px";
  activity.style.height = main.offsetHeight - 30 + "px";
  projects.style.height = main.offsetHeight - 30 + "px";
  projects.style.width = main.offsetWidth + "px";
  github.style.maxWidth = main.offsetWidth - 30 + "px";
  scratch.style.height = main.offsetHeight - 30 + "px";
  if (!window.width < main.offsetWidth)
    document.querySelector("nav").style.maxWidth = `${main.offsetWidth}px`;
  else document.querySelector("nav").style.maxWidth = `100%`;
  document.querySelector("nav").style.padding = `0 calc(50% - ${
    main.offsetWidth / 2
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
    left: main.offsetWidth * dir,
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
  "I wear teal and purple for someone who meant the world to me",
  "I miss you, grandpa",
  "What the rizz?",
  "Buy me a SEGA Saturn please 🥺🙏",
  "Dont be number 3 buddy",
  "That was quite poggers!",
  "Milk",
  "<button>Okay.</button>",
  "Jar of cheese",
  "Jack attack the butt crack!",
  ";",
  "Chippi chippi chappa chappa",
  "Slurp",
  "& Knuckles",
];
document.getElementById("quote").innerHTML =
  fuckAssQuotes[Math.floor(Math.random() * fuckAssQuotes.length)];

let sortedConts;
let currYear;
let availableYears = [];

function updateGithub() {
  fetch("https://github-contributions-api.jogruber.de/v4/queenaka")
    .then((res) => res.json())
    .then((data) => {
      const years = [];
      for (const year in data.total)
        if (data.total[year] !== 0) years.push(year);

      availableYears = years.sort();
      currYear = Math.max(...years.map(Number)).toString();

      const contributions = data.contributions.filter((cont) =>
        years.some((year) => cont.date.startsWith(year))
      );

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const sorted = {};
      contributions.forEach((cont) => {
        const [year, month, day] = cont.date.split("-");
        const monthName = months[parseInt(month) - 1];

        if (!sorted[year]) sorted[year] = {};
        if (!sorted[year][monthName]) {
          sorted[year][monthName] = {
            contributions: [],
            count: 0,
          };
        }

        sorted[year][monthName].contributions.push(cont);
        sorted[year][monthName].count += cont.count;
      });

      sortedConts = sorted;
      renderYear(currYear);
    });
}

function renderYear(year) {
  const yearDiv = document.getElementById("year");
  yearDiv.textContent = currYear;
  const monthsDiv = document.getElementById("months");
  monthsDiv.innerHTML = "";
  if (!sortedConts[year]) return;
  Object.entries(sortedConts[year]).forEach(([monthName, contributions]) => {
    const month = document.createElement("span");
    month.textContent = monthName;
    const conts = document.createElement("span");
    conts.textContent = `${contributions.count}`;
    const calendar = document.createElement("div");
    calendar.classList.add("calendar");
    calendar.classList.add("ssgrower");
    const days = document.createElement("div");
    days.classList.add("days");
    contributions.contributions.forEach((cont, i) => {
      const day = document.createElement("div");
      day.classList.add("day");
      day.classList.add(`lvl-${cont.level}`);
      day.textContent = i + 1;
      days.appendChild(day);
    });

    const head = document.createElement("div");
    head.classList.add("head");
    head.appendChild(month);
    head.appendChild(conts);
    calendar.appendChild(head);
    calendar.appendChild(days);
    monthsDiv.appendChild(calendar);
  });
}

function prevYear() {
  const index = availableYears.indexOf(currYear);
  if (index > 0) {
    currYear = availableYears[index - 1];
    renderYear(currYear);
  }
}

function nextYear() {
  const index = availableYears.indexOf(currYear);
  if (index < availableYears.length - 1) {
    currYear = availableYears[index + 1];
    renderYear(currYear);
  }
}

updateGithub();

function getRecentActivity() {
  fetch("https://api.github.com/users/queenaka/events")
    .then((res) => res.json())
    .then((data) => {
      const activityDiv = document.getElementById("activity");
      activityDiv.innerHTML = "";
      data.forEach((event) => {
        switch (event.type) {
          case "PushEvent":
            event.payload.commits.forEach((commit) => {
              const commitDiv = document.createElement("div");
              commitDiv.classList.add("song");
              commitDiv.classList.add("ssgrower");
              const nameSpan = document.createElement("span");
              const messageSpan = document.createElement("span");
              nameSpan.classList.add("name");
              nameSpan.textContent = `Pushed to ${event.repo.name}`;
              messageSpan.classList.add("artist");
              messageSpan.textContent = commit.message;
              commitDiv.appendChild(nameSpan);
              commitDiv.appendChild(messageSpan);
              const icon = document.createElement("div");
              icon.classList.add("icon");
              icon.style = "--icon: url(./media/github/push.svg)";
              commitDiv.appendChild(icon);
              activityDiv.appendChild(commitDiv);
            });
            break;
          case "CreateEvent":
            const createDiv = document.createElement("div");
            createDiv.classList.add("song");
            createDiv.classList.add("ssgrower");
            const nameSpan = document.createElement("span");
            const messageSpan = document.createElement("span");
            nameSpan.classList.add("name");
            nameSpan.textContent = `Created ${event.repo.name}`;
            messageSpan.classList.add("artist");
            messageSpan.textContent = `Type: ${event.payload.ref_type}`;
            createDiv.appendChild(nameSpan);
            createDiv.appendChild(messageSpan);
            const icon = document.createElement("div");
            icon.classList.add("icon");
            icon.style = "--icon: url(./media/github/create.svg)";
            createDiv.appendChild(icon);
            activityDiv.appendChild(createDiv);
            break;
          case "IssueCommentEvent":
            const issueDiv = document.createElement("div");
            issueDiv.classList.add("song");
            issueDiv.classList.add("ssgrower");
            const issueNameSpan = document.createElement("span");
            const issueMessageSpan = document.createElement("span");
            issueNameSpan.classList.add("name");
            issueNameSpan.textContent = `Commented on issue, ${event.repo.name}`;
            issueMessageSpan.classList.add("artist");
            issueMessageSpan.textContent = event.payload.comment.body;
            issueDiv.appendChild(issueNameSpan);
            issueDiv.appendChild(issueMessageSpan);
            const issueIcon = document.createElement("div");
            issueIcon.classList.add("icon");
            issueIcon.style = "--icon: url(./media/github/comment.svg)";
            issueDiv.appendChild(issueIcon);
            activityDiv.appendChild(issueDiv);
            break;
          case "PullRequestEvent":
            const prDiv = document.createElement("div");
            prDiv.classList.add("song");
            prDiv.classList.add("ssgrower");
            const prNameSpan = document.createElement("span");
            const prMessageSpan = document.createElement("span");
            prNameSpan.classList.add("name");
            prNameSpan.textContent = `Pull request, ${event.repo.name}`;
            prMessageSpan.classList.add("artist");
            prMessageSpan.textContent = event.payload.pull_request.title;
            prDiv.appendChild(prNameSpan);
            prDiv.appendChild(prMessageSpan);
            const prIcon = document.createElement("div");
            prIcon.classList.add("icon");
            prIcon.style = "--icon: url(./media/github/pr.svg)";
            prDiv.appendChild(prIcon);
            activityDiv.appendChild(prDiv);
            break;
          case "WatchEvent":
            const watchDiv = document.createElement("div");
            watchDiv.classList.add("song");
            watchDiv.classList.add("ssgrower");
            const watchNameSpan = document.createElement("span");
            const watchMessageSpan = document.createElement("span");
            watchNameSpan.classList.add("name");
            watchNameSpan.textContent = `Watched ${event.repo.name}`;
            watchMessageSpan.classList.add("artist");
            watchMessageSpan.textContent = "";
            watchDiv.appendChild(watchNameSpan);
            watchDiv.appendChild(watchMessageSpan);
            const watchIcon = document.createElement("div");
            watchIcon.classList.add("icon");
            watchIcon.style = "--icon: url(./media/github/watch.svg)";
            watchDiv.appendChild(watchIcon);
            activityDiv.appendChild(watchDiv);
            break;
          case "ForkEvent":
            const forkDiv = document.createElement("div");
            forkDiv.classList.add("song");
            forkDiv.classList.add("ssgrower");
            const forkNameSpan = document.createElement("span");
            const forkMessageSpan = document.createElement("span");
            forkNameSpan.classList.add("name");
            forkNameSpan.textContent = `Forked ${event.repo.name}`;
            forkMessageSpan.classList.add("artist");
            forkMessageSpan.textContent = "";
            forkDiv.appendChild(forkNameSpan);
            forkDiv.appendChild(forkMessageSpan);
            const forkIcon = document.createElement("div");
            forkIcon.classList.add("icon");
            forkIcon.style = "--icon: url(./media/github/fork.svg)";
            forkDiv.appendChild(forkIcon);
            activityDiv.appendChild(forkDiv);
            break;
          case "DeleteEvent":
            const deleteDiv = document.createElement("div");
            deleteDiv.classList.add("song");
            deleteDiv.classList.add("ssgrower");
            const deleteNameSpan = document.createElement("span");
            const deleteMessageSpan = document.createElement("span");
            deleteNameSpan.classList.add("name");
            deleteNameSpan.textContent = `Deleted ${event.repo.name}`;
            deleteMessageSpan.classList.add("artist");
            deleteMessageSpan.textContent = `Type: ${event.payload.ref_type}`;
            deleteDiv.appendChild(deleteNameSpan);
            deleteDiv.appendChild(deleteMessageSpan);
            const deleteIcon = document.createElement("div");
            deleteIcon.classList.add("icon");
            deleteIcon.style = "--icon: url(./media/github/delete.svg)";
            deleteDiv.appendChild(deleteIcon);
            activityDiv.appendChild(deleteDiv);
            break;
          default:
            const unknownDiv = document.createElement("div");
            unknownDiv.classList.add("song");
            unknownDiv.classList.add("ssgrower");
            const unknownNameSpan = document.createElement("span");
            const unknownMessageSpan = document.createElement("span");
            unknownNameSpan.classList.add("name");
            unknownNameSpan.textContent = `Unknown event, ${event.repo.name}`;
            unknownMessageSpan.classList.add("artist");
            unknownMessageSpan.textContent = `Type: ${event.type}`;
            unknownDiv.appendChild(unknownNameSpan);
            unknownDiv.appendChild(unknownMessageSpan);
            const unknownIcon = document.createElement("div");
            unknownIcon.classList.add("icon");
            unknownIcon.style = "--icon: url(./media/github/unknown.svg)";
            unknownDiv.appendChild(unknownIcon);
            activityDiv.appendChild(unknownDiv);
        }
      });
    });
}

getRecentActivity();

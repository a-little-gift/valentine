function validateLogin() {
  let username = document.getElementById("username").value.trim().toLowerCase();
  let password = document.getElementById("password").value.trim().toLowerCase();
  let loginMessage = document.getElementById("loginMessage");

  if (username === "" || password === "") {
    loginMessage.innerText = "Both fields are required!";
    loginMessage.style.color = "red";
    return;
  }

  if (username === "matthew" && password === "billie") {
    loginMessage.innerHTML = "ACCESS DENIED 😈";
    loginMessage.style.color = "red";

    setTimeout(() => {
      loginMessage.innerHTML = "Just kidding! 😋";
      loginMessage.style.color = "green"; 
    }, 2000); 

    localStorage.setItem("username", username);

    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 4000); 

    document.getElementById("ever").style.display = "block";
    document.getElementById("crazy").style.display = "block";

    document.getElementById("yesButton").style.display = "inline";
    document.getElementById("noButton").style.display = "inline";
  } else {
    loginMessage.innerHTML = "ACCESS DENIED 🥲<br>Try Again! 🙃";
    loginMessage.style.color = "red"; 
  }

  // Show "Happy Valentine's Day" after 2 seconds
  setTimeout(() => {
    document.getElementById("valentinesMessage").innerText = "Happy Valentine’s Day!";
    document.getElementById("valentinesMessage").style.display = "block"; // Make it visible
  }, 2000); // 2-second delay
}

document.addEventListener("DOMContentLoaded", function () {
  let username = localStorage.getItem("username") || "Stranger";
  username = username.charAt(0).toUpperCase() + username.slice(1);
  document.getElementById("welcomeText").innerText = `Welcome, ${username}!`;

  document.getElementById("playButton").style.display = "none";
  document.getElementById("stopButton").style.display = "none";

  document.getElementById("playButton").style.display = "inline";
  document.getElementById("stopButton").style.display = "inline";
});

let reasons = [
  "You’re so good to Billie, and that says\na lot about you. 🐶",
  "You make me laugh when I don’t even want to smile. 🫠",
  "Talking to you feels like home. 🏡",
  "You care about the world, and it’s all real. 🌍",
  "You have a good heart, and you’re terrible at hiding it. 💖",
  "The way you blush. 🤭",
  "Your eyes? I’m obsessed. 🙈",
  "Your voice is dangerous. 🔥",
  "Your strength is amazing. 💪🏼",
  "Your art is incredible. 📸",
  "You’re such a wise baby… man. 👀",
  "You understand me in ways most don’t. 🧐",
  "You’re genuinely good, and that’s so rare. ✨",
  "You’re ridiculously smart. 🤓",
  "Your dark humor is the best. 😆",
  "You’re cute AND hot?! Danger Alert. ⚠️",
  "You’re not scared to speak your mind. 🗣️",
  "You’re thoughtful in ways that always surprise me. 🫢",
  "You’re just yourself, no fake stuff. 💯",
  "You’re a crazy Batman. 🦹🏻‍♂️ ",
  "You’re a caring ninja. 🥷 ",
  "You don’t just hear but actually listen. 👂🏼",
  "Your passion for your work is inspiring. ❤️‍🔥",
  "You make ordinary moments feel special. ✨",
  "You never act superior to anyone. 🙌",
  "You treat people with respect, no matter who they are. 🤝",
  "You’re different in the best way. 🌟",
  "Awkward? Never with you. 😎",
  "You’re perfectly imperfect, and I love it. 💕",
  "You’ve been there for me in ways that mean so much. 🥹",
  "You make everything feel okay. 🌈",
  "You take relationships seriously. 👫🏻",
  "You’re so expressive, and I love it. 😍",
  "You’re really affectionate. 🫂",
  "You stand up for what’s right. ✊",
  "You always know what to say. 💬",
  "You see the brighter side of things. 🌞",
  "You’ve been through a lot, and still keep going. 🫡",
  "You don’t give your heart to just anyone. ❤️",
  "You’re my high standard. 💎",
];
let currentReason = 0;
let hasClickedYes = false;
let hasClickedNo = false;

function playMusic() {
  document.getElementById("song").play();

  document.getElementById("playButton").style.display = "inline";
  document.getElementById("stopButton").style.display = "inline";
  document.getElementById("soundOnText").style.display = "block";

  setTimeout(() => {

    document.getElementById("soundOnText").style.display = "none";

    document.getElementById("ever").style.display = "block";

    setTimeout(() => {
      document.getElementById("crazy").style.display = "block";

      setTimeout(() => {
        document.getElementById("yesButton").style.display = "inline";
        document.getElementById("noButton").style.display = "inline";
      }, 3000);
    }, 3000);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  let username = localStorage.getItem("username") || "Stranger";
  username = username.charAt(0).toUpperCase() + username.slice(1);
  document.getElementById("welcomeText").innerText = `Welcome, ${username}!`;

  document.getElementById("ever").style.display = "none";
  document.getElementById("crazy").style.display = "none";
  document.getElementById("yesButton").style.display = "none";
  document.getElementById("noButton").style.display = "none";
  document.getElementById("whyILikeYouButton").style.display = "none";
});

function stopMusic() {
  document.getElementById("song").pause();
}

function handleYes() {
  document.getElementById("responseMessage").innerText = "I thought so 😌";

  setTimeout(() => {
    document.getElementById("responseMessage").innerText = "Press To Find Out:";
    document.getElementById("whyILikeYouButton").style.display = "block";
    if (currentReason === 1) {
      document.getElementById("responseMessage").innerText = "Press Again: ";
    }
  }, 3000);

   
}

function handleNo() {
  document.getElementById("responseMessage").innerText =
    "WTH… I’ll still tell you 😒";

  setTimeout(() => {
    document.getElementById("responseMessage").innerText = "Press To Find Out:";
    document.getElementById("whyILikeYouButton").style.display = "block";
  }, 3000);

   if (currentReason === 1) {
     document.getElementById("responseMessage").innerText = "Press Again: ";
   }
}

function showReason() {
  if (currentReason < reasons.length) {
    document.getElementById("reasonDisplay").innerText = `${
      currentReason + 1
    }/40: ${reasons[currentReason]}`;
    currentReason++;

    if (currentReason === 1) {
      document.getElementById("responseMessage").innerText = "Press Again: ";
    }

    if (currentReason === reasons.length) {
      setTimeout(() => {
        document.getElementById("finalMessage1").innerText =
          "I tried to keep it short... 😶";

        setTimeout(() => {
          document.getElementById("finalMessage2").innerText = "BUT";

          setTimeout(() => {
            document.getElementById("guessWhatButton").style.display = "block";
          }, 3000);
        }, 3000);
      }, 3000);
    }
  }
}

function redirect() {
  window.location.href = "flower.html"; 
}

const paperCard = document.getElementById("paperCard");
const paperCard2 = document.getElementById("paperCard2");
const paperCard3No = document.getElementById("paperCard3No");
const paperCard4 = document.getElementById("paperCard4");
const paperCard5 = document.getElementById("paperCard5");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const fineBtn = document.getElementById("fineBtn");
const finalYesBtn = document.getElementById("finalYesBtn");

function showCard(cardToShow) {
  cardToShow.classList.remove("hidden");
  cardToShow.style.animation = "none";
  cardToShow.offsetHeight;
  cardToShow.style.animation =
    "slideUp 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards";
}

nextBtn.addEventListener("click", () => {
  paperCard.classList.add("hidden");
  showCard(paperCard2);
});

noBtn.addEventListener("click", () => {
  paperCard2.classList.add("hidden");
  showCard(paperCard3No);
});

yesBtn.addEventListener("click", () => {
  paperCard2.classList.add("hidden");
  showCard(paperCard4);
});

fineBtn.addEventListener("click", () => {
  paperCard3No.classList.add("hidden");
  showCard(paperCard4);
});

finalYesBtn.addEventListener("click", () => {
  paperCard4.classList.add("hidden");
  showCard(paperCard5);
});

const envelopeData = {
  "you miss me": {
    text: "Hey love, if you're reading this, I'm guessing you're missing me. I miss you too, probably more than you know. Close your eyes and imagine me holding your hand, annoying you, making you laugh. Distance is temporary. What we have isn't. I'm always yours.",
    gif: "https://media.tenor.com/Zrr4L_Wd4JkAAAAj/bubu-rub-bubu-love-dudu.gif",
  },
  "you are sad": {
    text: "Hey, take a deep breath. It's okay to feel down sometimes, but don't forget how strong you are. I'm right here in your corner, cheering for you always. Whatever is bothering you will pass. Sending you so much warmth and a big warm hug.",
    gif: "https://media.tenor.com/zvA-D9cY9dkAAAAj/peach-goma-peach-goma-love.gif",
  },
  "you are happy": {
    text: "Seeing you happy is literally my favorite thing ever! Keep shining, keep smiling, and hold onto this sweet moment. You deserve every bit of joy coming your way today and always!",
    gif: "https://media.tenor.com/HOLG_hTN8WsAAAAj/bubu-jumping-on-dudu-happy.gif",
  },
  "you need a hug": {
    text: "Consider this note a tight, unbreakable hug from me to you. Wrap your arms around yourself, squeeze tight, and know that I'm sending you all my warmth right now. You're loved beyond words.",
    gif: "https://media.tenor.com/zBWaZBGDShMAAAAj/anime-hug.gif",
  },
  "we fight": {
    text: "Even when we butt heads or get frustrated, remember that I am always on your team. Fights come and go, but my love for you doesn't change. Let's take a breath, talk it out, and fix it together.",
    gif: "https://media.tenor.com/PXKZhCEfEfsAAAAj/bubu-bubu-dudu.gif",
  },
};

const letterModal = document.getElementById("letterModal");
const letterText = document.getElementById("letterText");
const letterGif = document.getElementById("letterGif");
const letterBackBtn = document.getElementById("letterBackBtn");

document.querySelectorAll(".mini-envelope").forEach((envelope) => {
  envelope.addEventListener("click", () => {
    const key = envelope.getAttribute("data-note");
    const data = envelopeData[key];

    if (data) {
      letterText.textContent = data.text;
      letterGif.src = data.gif;

      letterGif.className = "bottom-right-gif";

      const gifClass =
        "gif-" + key.toLowerCase().replace(/['’]/g, "").replace(/\s+/g, "-");

      letterGif.classList.add(gifClass);

      letterModal.classList.remove("hidden");
    }
  });
});

letterBackBtn.addEventListener("click", () => {
  letterModal.classList.add("hidden");
});
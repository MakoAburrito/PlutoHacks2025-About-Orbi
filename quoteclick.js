// orbi-bubble.js — use existing <p class="pop-up">
(() => {
  const QUOTES = [
    "🚀 Innovation is in my orbit!",
    "💫 See you at PlutoHacks!",
    "🌠 Let’s hack among the stars!",
    "✨ Keep reaching higher!",
    "🛰️ Byte’s got my back!"
  ];

  // find the pop-up element
  const bubble = document.querySelector(".pop-up");
  if (!bubble) return;

  // ensure it's hidden at start
  bubble.style.opacity = "0";

  function showBubble(text) {
    bubble.textContent = text;
    bubble.style.opacity = "1";

    clearTimeout(bubble._t);
    bubble._t = setTimeout(() => {
      bubble.style.opacity = "0";
    }, 2500); // visible for 2.5s
  }

  // attach click listener to orbi model or wrapper
  const orbiModel = document.getElementById("orbi-model");
  const wrapper = document.getElementById("viewer-wrapper");

  const target = orbiModel || wrapper;
  if (target) {
    target.addEventListener("pointerdown", () => {
      const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      showBubble(quote);
    });
  }
})();

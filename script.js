/*-----------------------------------*\
  #script.js
\*-----------------------------------*/

const textareaEl = document.querySelector(".textarea");
const numberOfcharactersEl = document.querySelector(
  ".stat__number--characters"
);
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("wrong input");
    textareaEl.value = textareaEl.value.replace("<script>", "").length;
  }
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  const numberOfcharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfcharacters;
  const facebookCharactersLeft = 2200 - numberOfcharacters;

  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  numberOfcharactersEl.textContent = numberOfcharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
  wordsNumberEl.textContent = numberOfWords;
};

textareaEl.addEventListener("input", inputHandler);

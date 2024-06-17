let quotesId = document.querySelector(".quotes-id");
let quotes = document.querySelector(".quotes");
let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let author = document.querySelector(".author");

let box = document.querySelector(".box");
let mood = document.querySelector(".mood");
let myInterval;

async function fetchQuotes() {
  let data = await fetch("http://localhost:3000/quotes");
  let result = await data.json();
  return result;
}

async function generateQuotes() {
  let result = await fetchQuotes();
  let resultIndex = Math.floor(Math.random() * result.length) + 1;
  quotes.textContent = result[resultIndex].quote;
  quotesId.textContent = Number(quotesId.innerHTML) + 1;

  author.textContent = result[resultIndex].author;
}
function startAutoPlay() {
  myInterval = setInterval(generateQuotes, 1000);
}
autoBtn.onclick = startAutoPlay;
autoBtn.addEventListener("click", function () {
  mood.style.display = "none";
});

stopBtn.addEventListener("click", function () {
  clearInterval(myInterval);
  mood.style.display = "none";
});

generateBtn.addEventListener("click", function () {
  generateQuotes();
});

autoBtn.addEventListener("click", function () {
  myInterval;
  mood.style.display = "block";
  stopBtn.innerHTML = "Stop Generate";
});

autoBtn.addEventListener("click", myInterval);

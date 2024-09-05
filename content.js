const buttonFont = document.querySelector("#font");
const buttonRemover = document.querySelector("#remover");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpace = document.querySelector("#letter-space");

// document.addEventListener("DOMContentLoaded", () => {
// const buttonFont = document.querySelector("#font");
buttonFont.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: changeFont,
    });
  });
});
// });

function changeFont() {
  const allParagraphes = document.querySelectorAll("p");
  allParagraphes.forEach((p) => {
    p.style.backgroundColor = "red";
  });
}

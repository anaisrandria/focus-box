const buttonFont = document.querySelector("#font");
const buttonRemover = document.querySelector("#remover");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpace = document.querySelector("#letter-space");
let buttonFontActive = true;

// ------------------ FONCTIONS -----------------------------------------------
function changeFont() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		console.log();
		p.style.fontFamily = "Tahoma";
	});
	buttonFontActive = false;
	return buttonFontActive;
}

function changeFontSize() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontSize = "5rem";
		p.style.lineHeight = "1.5em";
		p.style.boxSizing = "border-box";
		p.style.overflowWrap = "break-word";
	});
}

function resetFont() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.reset();
	});
	buttonFontActive = true;
	return buttonFontActive;
}

function changeLineHeight() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.lineHeight = "1.4rem";
	});
}

function changeLetterSpacing() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.letterSpacing = "0.8rem";
	});
}

// ------------------ GESTION DES BOUTONS ----------------------------------------
buttonFont.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		// if (buttonFontActive === true) {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFont,
		});
		chrome.scripting.then(
			console.log(`valeur bouton Font active : ${buttonFontActive}`)
		);
		// } else {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: resetFont,
		});
		// }
	});
});

buttonFontSize.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFontSize,
		});
	});
});

buttonLineHeight.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeLineHeight,
		});
	});
});

buttonLetterSpace.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeLetterSpacing,
		});
	});
});

// réinitialiser les paramètres
// document.getElementById("myform").reset();

const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpace = document.querySelector("#letter-space");
const buttonRemover = document.querySelector("#remover");

let settings = {
	buttonFont: {
		status: false,
		styleProperty: "fontFamily",
		defaultValue: null,
		customValue: null
	},
	buttonFontSize: {
		status: false,
		styleProperty: "fontSize",
		defaultValue: null,
		customValue: null
	},
	buttonLineHeight: {
		status: false,
		styleProperty: "lineHeight",
		defaultValue: null,
		customValue: null
	},
	buttonLetterSpace: {
		status: false,
		styleProperty: "letterSpace",
		defaultValue: null,
		customValue: null
	},
	buttonRemover: {
		status: false,
	}
};

// ------------------ FONCTIONS POUR CUSTOMISER LA PAGE -----------------------------------------------


function changeFont() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontFamily = "Tahoma";
		settings.buttonFont.customValue = window.getComputedStyle(p, null).getPropertyValue("font-family");
		console.log(`🐔 Default Value is: ${settings.buttonFont.defaultValue}`);
		console.log(`🐝 Custom Value is: ${settings.buttonFont.customValue}`);
	});
};

function changeFontSize() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontSize = "5rem";
		p.style.lineHeight = "1.5em";
		p.style.boxSizing = "border-box";
		p.style.overflowWrap = "break-word";
		p.style.hyphens = "auto";
	});
};

function resetFont() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.reset();
	});
	buttonFontActive = true;
	return buttonFontActive;
};

function changeLineHeight() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.lineHeight = "1.4em";
	});
};

function changeLetterSpacing() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.letterSpacing = "0.8rem";
	});
};


// ------------------ GESTION DES BOUTONS ----------------------------------------

buttonFont.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFont,
		});
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
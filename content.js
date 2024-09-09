const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpacing = document.querySelector("#letter-spacing");
const buttonRemover = document.querySelector("#remover");
const allTags = "p, h1, h2, h3, h4, h5, h6, li, ul, ol, a, strong, em, i, span, q, th, td";


let settings = {
	buttonFont: {
		// status: false,
		styleProperty: "fontFamily",
		defaultValue: null,
		customValue: null
	},
	buttonFontSize: {
		// status: false,
		styleProperty: "fontSize",
		defaultValue: null,
		customValue: null
	},
	buttonLineHeight: {
		// status: false,
		styleProperty: "lineHeight",
		defaultValue: null,
		customValue: null
	},
	buttonLetterSpacing: {
		// status: false,
		styleProperty: "letterSpacing",
		defaultValue: null,
		customValue: null
	},
	buttonRemover: {
		// status: false,
	}
};


// ------------ FONCTIONS POUR CUSTOMISER LA PAGE ------------ //

function changeFont() {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.fontFamily = "Tahoma";
		settings.buttonFont.customValue = window.getComputedStyle(tag, null).getPropertyValue("font-family");
	});
	console.log("🦄 update font-family is:", settings);
};

function changeFontSize() {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		const fontSizeFloat = parseFloat(window.getComputedStyle(tag, null).getPropertyValue("font-size"));
		tag.style.fontSize = (fontSizeFloat + 1) + "px";
		tag.style.lineHeight = "1.5em";
		tag.style.boxSizing = "border-box";
		tag.style.overflowWrap = "break-word";
		tag.style.hyphens = "auto";
		settings.buttonFontSize.customValue = window.getComputedStyle(tag, null).getPropertyValue("font-size");
	});
	console.log("🐣 update font-size is:", settings);
};

function changeLineHeight() {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.lineHeight = "1.4em";
		settings.buttonLineHeight.customValue = window.getComputedStyle(tag, null).getPropertyValue("line-height");
	});
	console.log("🐸 update line-height is:", settings);
};

function changeLetterSpacing() {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.letterSpacing = "0.8rem";
		settings.buttonLetterSpacing.customValue = window.getComputedStyle(tag, null).getPropertyValue("letter-spacing");
	});
	console.log("🐙 update letter-spacing is:", settings);
};

console.log("🐍 initial settings object is:", settings);


// ------------ GESTION DES BOUTONS ------------ //

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

buttonLetterSpacing.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeLetterSpacing,
		});
	});
});
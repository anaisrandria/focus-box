const buttonRemover = document.querySelector("#remover");
const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpacing = document.querySelector("#letter-spacing");


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
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontFamily = "Tahoma";
		settings.buttonFont.customValue = window.getComputedStyle(p, null).getPropertyValue("font-family");
	});
	console.log("🦄 update font-family is:", settings);
};

function changeFontSize() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontSize = "5rem";
		p.style.lineHeight = "1.5em";
		p.style.boxSizing = "border-box";
		p.style.overflowWrap = "break-word";
		p.style.hyphens = "auto";
		settings.buttonFontSize.customValue = window.getComputedStyle(p, null).getPropertyValue("font-size");
	});
	console.log("🐣 update font-size is:", settings);
};

function changeLineHeight() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.lineHeight = "1.4em";
		settings.buttonLineHeight.customValue = window.getComputedStyle(p, null).getPropertyValue("line-height");
	});
	console.log("🐸 update line-height is:", settings);
};

function changeLetterSpacing() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.letterSpacing = "0.8rem";
		settings.buttonLetterSpacing.customValue = window.getComputedStyle(p, null).getPropertyValue("letter-spacing");
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
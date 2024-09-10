const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpacing = document.querySelector("#letter-spacing");
const buttonRemover = document.querySelector("#remover");
const buttonReset = document.querySelector("#reset");
const allTags =
	"p, h1, h2, h3, h4, h5, h6, li, ul, ol, a, strong, em, i, span, q, th, td";

let settings = {
	buttonFont: {
		styleProperty: "fontFamily",
		defaultValue: null,
		customValue: null,
	},
	buttonFontSize: {
		styleProperty: "fontSize",
		defaultValue: null,
		customValue: null,
	},
	buttonLineHeight: {
		styleProperty: "lineHeight",
		defaultValue: null,
		customValue: null,
	},
	buttonLetterSpacing: {
		styleProperty: "letterSpacing",
		defaultValue: null,
		customValue: null,
	},
	buttonRemover: {
		status: false,
	},
};

// ------------ FONCTIONS POUR CUSTOMISER LA PAGE ------------ //

// function changeFont() {
// 	const allParagraphes = document.querySelectorAll(allTags);
// 	allParagraphes.forEach((tag) => {
// 		tag.style.fontFamily = "Tahoma";
// 		settings.buttonFont.customValue = window.getComputedStyle(tag, null).getPropertyValue("font-family");
// 	});
// 	console.log("🦄 update font-family is:", settings);
// };

function changeFont(font) {
	const allParagraphes = document.querySelectorAll("*");
	console.log("Je suis dans change font");
	console.log("font value is:", font);

	if (font === "arial") {
		console.log("Je suis dans Arial");
		allParagraphes.forEach((tag) => {
			tag.style.fontFamily = "Arial";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});
	} else if (font === "verdana") {
		allParagraphes.forEach((tag) => {
			tag.style.fontFamily = "Verdana";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});
	} else if (font === "helvetica") {
		allParagraphes.forEach((tag) => {
			tag.style.fontFamily = "Helvetica";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});
	}
}

function changeFontSize(fontSize) {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.fontSize = fontSize + "px";
		tag.style.lineHeight = "1.5em";
		tag.style.boxSizing = "border-box";
		tag.style.overflowWrap = "break-word";
		tag.style.hyphens = "auto";
		settings.buttonFontSize.customValue = window
			.getComputedStyle(tag, null)
			.getPropertyValue("font-size");
	});
	console.log("🐣 update font-size is:", settings);
}

function changeLineHeight(lineHeight) {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.lineHeight = lineHeight + "px";
		settings.buttonLineHeight.customValue = window
			.getComputedStyle(tag, null)
			.getPropertyValue("line-height");
	});
	console.log("🐸 update line-height is:", settings);
}

function changeLetterSpacing(letterSpacing) {
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.letterSpacing = letterSpacing + "px";
		settings.buttonLetterSpacing.customValue = window
			.getComputedStyle(tag, null)
			.getPropertyValue("letter-spacing");
	});
	console.log("🐙 update letter-spacing is:", settings);
}

console.log("🐍 initial settings object is:", settings);

function removeDivs() {}

// ------------ GESTION DES BOUTONS ------------ //

buttonFont.addEventListener("change", () => {
	let fontValue = document.getElementById("font").value;
	console.log("font value is:", fontValue);
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFont,
			args: [fontValue],
		});
	});
});

buttonFontSize.addEventListener("input", (event) => {
	let fontSize = event.target.value;
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFontSize,
			args: [fontSize],
		});
	});
});

buttonLineHeight.addEventListener("input", (event) => {
	let lineHeight = event.target.value;
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeLineHeight,
			args: [lineHeight],
		});
	});
});

buttonLetterSpacing.addEventListener("click", (event) => {
	let letterSpacing = event.target.value;
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeLetterSpacing,
			args: [letterSpacing],
		});
	});
});

buttonReset.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: resetSettings,
			// args: [x],
		});
	});
});

// buttonRemover.addEventListener("click", () => {
// 	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// 		chrome.scripting.executeScript({
// 			target: { tabId: tabs[0].id },
// 			func: removeDivs,
// 		});
// 	});
// });

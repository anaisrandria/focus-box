const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpace = document.querySelector("#letter-space");
const buttonRemover = document.querySelector("#remover");

let settings = {
	buttonFont: {
		status: false,
		styleProperty: "fontFamily",
		value: null
	},
	buttonFontSize: {
		status: false,
		styleProperty: "fontSize",
		value: null
	},
	buttonLineHeight: {
		status: false,
		styleProperty: "lineHeight",
		value: null
	},
	buttonLetterSpace: {
		status: false,
		styleProperty: "letterSpace",
		value: null
	},
	buttonRemover: {
		status: false,
	}
};

// ------------------ FONCTIONS -----------------------------------------------

function changeFont() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		settings.buttonFont.value = window.getComputedStyle(p, null).getPropertyValue("font-family")
		console.log(`La 1ère valeur de buttonFont: ${settings.buttonFont.value}`);
		console.log(`La police par défaut est: ${window.getComputedStyle(p, null).getPropertyValue("font-family")}`);
		p.style.fontFamily = "Tahoma";
		console.log(`La nouvelle police est ${window.getComputedStyle(p, null).getPropertyValue("font-family")}`);
	});
};

function changeFontSize() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		p.style.fontSize = "5rem";
		p.style.lineHeight = "1.5em";
		p.style.boxSizing = "border-box";
		p.style.overflowWrap = "break-word";
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
		p.style.lineHeight = "1.4rem";
	});
};

// function changeLetterSpacing() {
// 	const allParagraphes = document.querySelectorAll("p");
// 	allParagraphes.forEach((p) => {
// 		p.style.letterSpacing = "0.8rem";
// 	});
// };

// ------------------ GESTION DES BOUTONS ----------------------------------------
buttonFont.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		// if (buttonFontActive === true) {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFont,
		});
		// chrome.scripting.then(
		// 	console.log(`valeur bouton Font active : ${buttonFontActive}`)
		// );
		// } else {
		// chrome.scripting.executeScript({
		// 	target: { tabId: tabs[0].id },
		// 	func: resetFont,
		// });
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

// buttonLetterSpace.addEventListener("click", () => {
// 	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// 		chrome.scripting.executeScript({
// 			target: { tabId: tabs[0].id },
// 			func: changeLetterSpacing,
// 		});
// 	});
// });

// réinitialiser les paramètres
// document.getElementById("myform").reset();

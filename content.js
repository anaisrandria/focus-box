const buttonRemover = document.querySelector("#remover");
const buttonFont = document.querySelector("#font");
const buttonFontSize = document.querySelector("#font-size");
const buttonLineHeight = document.querySelector("#line-height");
const buttonLetterSpacing = document.querySelector("#letter-spacing");
const buttonReset = document.querySelector("#reset");

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

function changeFont(font) {
	const link = document.createElement('link'); 
	link.setAttribute("rel","stylesheet")
	document.head.appendChild(link)

	const allParagraphs = document.querySelectorAll("*");
	console.log("Je suis dans change font");
	console.log("font value is:", font);

	if (font === "Sniglet") {
		link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&display=swap")
		console.log("Je suis dans Sniglet");
		allParagraphs.forEach((tag) => {
			tag.style.fontFamily = "Sniglet";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});

	} else if (font === "Roboto") {
		link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap")
		allParagraphs.forEach((tag) => {
			tag.style.fontFamily = "Roboto";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});

	} else if (font === "Signika") {
		link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Signika:wght@300..700&display=swap")
		allParagraphs.forEach((tag) => {
			tag.style.fontFamily = "Signika";
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});
		
	} else if (font === "default") {
		allParagraphs.forEach((tag) => {
			tag.style.fontFamily = settings.buttonFont.defaultValue;
			settings.buttonFont.customValue = window
				.getComputedStyle(tag, null)
				.getPropertyValue("font-family");
		});
	}
}

function changeFontSize(sliderValue) {
	const allParagraphs = document.querySelectorAll("*");
	const defaultValue = settings.buttonFontSize.defaultValue;

	allParagraphs.forEach((tag) => {
		let newValue = ((sliderValue) * parseFloat(defaultValue) / 100) + parseFloat(defaultValue);
		tag.style.fontSize = newValue + "px";
		console.log("new value is:", newValue);
		console.log("slider value is:", sliderValue);
		console.log("default value is:", defaultValue);
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
	const allParagraphs = document.querySelectorAll("*");
	allParagraphs.forEach((tag) => {
		tag.style.lineHeight = lineHeight + "px";
		settings.buttonLineHeight.customValue = window
			.getComputedStyle(tag, null)
			.getPropertyValue("line-height");
	});
	console.log("🐸 update line-height is:", settings);
}

function changeLetterSpacing(letterSpacing) {
	const allParagraphs = document.querySelectorAll("*");
	allParagraphs.forEach((tag) => {
		tag.style.letterSpacing = letterSpacing + "px";
		settings.buttonLetterSpacing.customValue = window
			.getComputedStyle(tag, null)
			.getPropertyValue("letter-spacing");
	});
	console.log("🐙 update letter-spacing is:", settings);
}

console.log("🐍 initial settings object is:", settings);


// ------------ GESTION DES BOUTONS ------------ //

// buttonRemover.addEventListener("click", () => {
// 	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// 		chrome.scripting.executeScript({
// 			target: { tabId: tabs[0].id },
// 			func: removeDivs,
// 		});
// 	});
// });

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
	let sliderValue = event.target.value;
	// let defaultValue = settings.buttonFontSize.defaultValue;
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: changeFontSize,
			args: [sliderValue],
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

buttonLetterSpacing.addEventListener("input", (event) => {
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
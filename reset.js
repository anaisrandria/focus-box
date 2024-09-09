// const buttonReset = document.querySelector("#reset"); -- déplacé vers content.js

function resetValue() {
    // document.querySelector(".button-container").reset();
	const allParagraphes = document.querySelectorAll(allTags);
	allParagraphes.forEach((tag) => {
		tag.style.fontFamily = settings.buttonFont.defaultValue;
		tag.style.fontSize = settings.buttonFontSize.defaultValue;
		// tag.style.lineHeight = settings.buttonLineHeight.defaultValue;
		tag.style.letterSpacing = settings.buttonLetterSpacing.defaultValue;
	});
	console.log("🐳 reset values are:", settings);
};

buttonReset.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: resetValue,
		});
	});
});


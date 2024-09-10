function resetValue() {	
	window.location.reload(); 
	const allParagraphes = document.querySelectorAll("*");
	// allParagraphes.forEach((elm) => {
	// 	elm.style.fontFamily = settings.buttonFont.defaultValue;
	// 	elm.style.fontSize = settings.buttonFontSize.defaultValue;
	// 	elm.style.lineHeight = settings.buttonLineHeight.defaultValue;
	// 	elm.style.letterSpacing = settings.buttonLetterSpacing.defaultValue;
	// });
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


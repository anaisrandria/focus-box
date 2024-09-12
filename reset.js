function resetValue() {	
	window.location.reload();	
	// const allTags = document.querySelectorAll("*");
	// allTags.forEach((tag) => {
	// 	tag.style.fontFamily = settings.buttonFont.defaultValue;
	// 	tag.style.fontSize = settings.buttonFontSize.defaultValue;
	// 	tag.style.lineHeight = settings.buttonLineHeight.defaultValue;
	// 	tag.style.letterSpacing = settings.buttonLetterSpacing.defaultValue;
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


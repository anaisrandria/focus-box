// ------------ FONCTIONS POUR RECUPERER LES VALEURS PAR DEFAUT ------------ // 

function getDefaultValue() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		settings.buttonFont.defaultValue = window.getComputedStyle(p, null).getPropertyValue("font-family");
        settings.buttonFontSize.defaultValue = window.getComputedStyle(p, null).getPropertyValue("font-size");
        settings.buttonLineHeight.defaultValue = window.getComputedStyle(p, null).getPropertyValue("line-height");
        settings.buttonLetterSpacing.defaultValue = window.getComputedStyle(p, null).getPropertyValue("letter-spacing");

		console.log(`🪲 Font family Default Value is: ${settings.buttonFont.defaultValue}`);
        console.log(`🪲 Font size Default Value is: ${settings.buttonFontSize.defaultValue}`);
        console.log(`🪲 Line height Default Value is: ${settings.buttonLineHeight.defaultValue}`);
        console.log(`🪲 Letter space Default Value is: ${settings.buttonLetterSpacing.defaultValue}`);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: getDefaultValue,
		});
	});
})
// ------------ FONCTIONS POUR RECUPERER LES VALEURS PAR DEFAUT ------------ // 

function getDefaultValue() {
	const allParagraphes = document.querySelectorAll("p");
    if (!settings.buttonFont.defaultValue) {
        allParagraphes.forEach((p) => {
            settings.buttonFont.defaultValue = window.getComputedStyle(p, null).getPropertyValue("font-family");
            settings.buttonFontSize.defaultValue = window.getComputedStyle(p, null).getPropertyValue("font-size");
            settings.buttonLineHeight.defaultValue = window.getComputedStyle(p, null).getPropertyValue("line-height");
            settings.buttonLetterSpacing.defaultValue = window.getComputedStyle(p, null).getPropertyValue("letter-spacing");
        });
    };
};

document.addEventListener("DOMContentLoaded", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: getDefaultValue,
		});
	});
})
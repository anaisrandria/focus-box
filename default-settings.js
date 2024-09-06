// ------------ FONCTIONS POUR RECUPERER LES VALEURS PAR DEFAUT ----------- // 

function getDefaultValue() {
	const allParagraphes = document.querySelectorAll("p");
	allParagraphes.forEach((p) => {
		settings.buttonFont.defaultValue = window.getComputedStyle(p, null).getPropertyValue("font-family");
		console.log(`🪲 Default Value is: ${settings.buttonFont.defaultValue}`);
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
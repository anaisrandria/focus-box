const buttonReset = document.querySelector("#reset");

function resetValue() {
    document.querySelector(".button-container").reset();
};

buttonReset.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: resetValue,
		});
	});
});


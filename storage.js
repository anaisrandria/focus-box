// document.addEventListener("DOMContentLoaded", function() {
//    const selectorFont = document.getElementById("font");
//    chrome.storage.local.get(["selectedFont"], function(result) {
//       if (result.selectedFont) {
//          selectorFont.value = result.selectedFont;
//       }
//    });
//    selectorFont.addEventListener("change", function() {
//       const selectedFont = selectorFont.value;
//       chrome.storage.local.set({ selectedFont: selectedFont});
//    });
// });
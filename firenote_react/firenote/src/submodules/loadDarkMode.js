/*global chrome*/

export default function loadDarkMode() {

    // check if user has enabled dark mode
    chrome.storage.sync.get(['firenote_dark'], function(result) {
        if (result['firenote_dark'] == true) {
            document.body.classList.toggle("dark-mode");
            document.getElementById('darkEnabled').innerHTML = "enabled";
        }
    });
}
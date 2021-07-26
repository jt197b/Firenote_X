/*global chrome*/

// enable dark mode CSS changes
export function toggleDarkMode() {

    document.body.classList.toggle('dark-mode');
    
    chrome.storage.sync.get(['firenote_dark'], function(result) {

        // check if dark mode was enabled by user
        let isDark = result['firenote_dark'];

        if (isDark == true) {
            document.getElementById("darkEnabled").innerHTML = "disabled";
            isDark = false;
        }
        else {
            document.getElementById("darkEnabled").innerHTML = "enabled";
            isDark = true;
        }
        chrome.storage.sync.set({'firenote_dark' : isDark}, function() {

        });
    });
  }
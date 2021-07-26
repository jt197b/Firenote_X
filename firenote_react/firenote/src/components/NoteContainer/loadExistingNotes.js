/*global chrome*/

export default async function loadExistingNotes(key) {

    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(key, resolve);
    })
    .then(result => {
        console.log("Result: ");
        console.log(result);
        return result;
    });
}
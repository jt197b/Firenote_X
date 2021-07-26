export default function parseLoadedNotes(storageCache) {

    let noteTemplates = [];

    for (let idx=1; idx <= 20; idx++) {

        idx = idx.toString();

        // check if a note exists with the given key/index
        try {
    
            let parsedNoteData = JSON.parse(storageCache[idx]);

            noteTemplates.push(parsedNoteData);
            
            let isMemo = parsedNoteData['isMemo'];
            
            if (isMemo == false) {
                console.log("render todo list items for this note ")
            }
            if (idx === '20') {
                let isComplete = true;
            }
        }

        catch (err) {
            continue;
        }
    }
    return noteTemplates;

}
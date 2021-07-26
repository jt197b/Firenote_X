
import { storeSync } from "../../submodules/storeSync";

export function addNewNote(idx, isMemo) {

    // create new note in local storage as empty list
    let noteProps = {
        'todo': null, // list of todo items
        'headerText': 'Note ' + idx.toString(), 
        'minimized': false, 
        'posTop': (window.scrollY + window.innerHeight / 2) + "px", 
        'posLeft': (window.scrollY + window.innerWidth / 2) - (300 / 2) + "px",
        'hidden': false,
        'isMemo': isMemo,
        'memo': null,
    };
    
    console.log("Creating item: " + idx);
    console.log(noteProps);
    
    storeSync(idx, noteProps);

    return noteProps;
}
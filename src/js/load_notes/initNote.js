
import { renderExistingNotes } from "./renderExistingNotes.js";

// creates notes when the page is loaded (note exists), or when the Add Note button is clicked (note does not exist yet)
export function initNote(noteTemplate) {
    console.log("creating note");
    //import * as lib from './bindNoteEvents.js'
    
    var idx = noteTemplate.idx.toString();
  
    //var note_header = 'Note ' + idx;
    chrome.storage.sync.get([idx], function(result) {
  
      var note = document.createElement('div');
      note.id = "mydiv" + idx;
      document.body.appendChild(note);
      note.classList.add('drag');
  
      note.innerHTML += '<input class="dragHeader" maxlength="30" readOnly="true" id="mydiv' + idx + 'header" value="Note ' + idx +'">';
      note.innerHTML += '<img src="/src/images/edit.png" class="editHeader" id="edit">';
      note.innerHTML += '<img src="/src/images/minimize.png" class="minimize" id="minimize">';
      note.innerHTML += '<img src="/src/images/exit.png" class="deleteNote" id="exit"></img>';
  
      if (noteTemplate.isMemo == true) {
        note.innerHTML += '<textarea placeholder="Type a memo here..." maxlength="600" class="memo" rows="8" spellcheck="false" id="memo' + idx +'" style="display:inline-block;"></textarea>';
        note.innerHTML += '<p class="memoCounter" id="memoCounter' + idx + '">Max 600 characters</p>';
        note.innerHTML += '<button class="saveMemo">Save Memo</button>';
      }
      else {
        note.innerHTML += '<input maxlength="250" class="task" placeholder="Add an item" id="task' + idx + '" style="display:inline-block;"><img src="/src/images/add.png" id="add" class="add">';
        note.innerHTML += '<img class="undo" id="undo' + idx + '" src="/src/images/undo.png">';
        note.innerHTML += '<div class="todoLists" id="todos' + idx + '"></div>';
      }
  
      // IF LOADING EXISTING NOTES
      if (noteTemplate.exists == true) {

        renderExistingNotes(note,result,idx);

      }
      // ****************************************************************
      // IF ADDING A NEW NOTE
      // ****************************************************************
      else {
        
        return(noteTemplate, note);
     
      } 
    });
  };
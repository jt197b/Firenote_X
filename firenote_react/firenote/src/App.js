import './App.css';
import React, { Component } from 'react';
import RightMenu from './components/RightMenu/RightMenu';
import NoteContainer from './components/NoteContainer/NoteContainer';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      existingNotes: this.props.existingNotes
    }

  }

  render() {

    console.log("This is existing notes: ");
    console.log(this.state.existingNotes);
    return (
      <div className="App">

        <div id="container">
        
          <RightMenu/>

          <NoteContainer notes={this.state.existingNotes}/>
          
        </div>

      </div>
    );
  }

  /*
  function successCallback(storageCache) {
    console.log("Storage cache: ");
    console.log(storageCache);

    let noteTemplates = parseLoadedNotes(storageCache);
    console.log("These are all notes: ");
    console.log(noteTemplates);
    console.log(noteTemplates[0]);
    return noteTemplates;
  }

  function failureCallback(storageCache) {
    console.log("Storage cache: ");
    console.log(storageCache);
  }

  loadExistingNotes().then(successCallback, failureCallback)
  */
  /*
  // retrive existing notes from Chrome storage in JSON format
  let storageCache = loadExistingNotes().then(noteTemplates => {
    console.log("Notes loaded.");

    let noteTemplates = parseNoteTemplates(storageCache);
    //return (parseNoteTemplates(storageCache));
    return noteTemplates;
  });
  console.log("Storage cache: ");
  console.log(storageCache);

  // parse JSON to retrieve note data
  //let noteTemplates = parseNoteTemplates(storageCache);
  */
  

  
}
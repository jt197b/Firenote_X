import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import loadDarkMode from './submodules/loadDarkMode';

import loadExistingNotes from './components/NoteContainer/loadExistingNotes';
import parseLoadedNotes from './parseLoadedNotes';

var allIdx = [];
for (let i = 1; i <= 20; i++) {
    allIdx.push(i.toString());
}

loadExistingNotes(allIdx).then(function (loadedNotes) {

  console.log('Notes laoded');
  console.log(loadedNotes);

  let parsedNotes = parseLoadedNotes(loadedNotes);
  console.log(parsedNotes);

  ReactDOM.render(
    <React.StrictMode>
      <App existingNotes={parsedNotes}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  loadDarkMode();
  reportWebVitals();

  })




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


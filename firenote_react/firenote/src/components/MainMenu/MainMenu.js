import React, { Component } from 'react';
import { addNewNote } from './addNewNote';

import styles from './MainMenu.module.css';

export default class MainMenu extends Component {
 
  addNewNote() {
    addNewNote();
  }

  render() {

    return(
      <div id={styles.intro}>
          <div id="centerTitle"><h1 id={styles.fire}>fire</h1><h1>note</h1></div>
          <p> your customizable workspace for virtual sticky notes and to-do lists.</p>
          <hr/><br/>
          <button id={styles.addNote} className={styles.blueBtn}>+ Add New List</button>
          <button id={styles.addMemo} className={styles.blueBtn}>+ Add New Memo</button>
          <p id="pending"> edit pending save. </p>
          <p id="darkEnabled">disabled</p>
      </div>
    );
  }
}
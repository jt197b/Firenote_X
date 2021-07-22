import React, { Component } from 'react';
import styles from './Note.module.css';

// image imports
import { addBtn, editBtn, exitBtn, minimizeBtn, undoBtn } from './images';

export default class Note extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            title: 'Note ' + props.idx,
            isMemo: false,
            isMinimized: false,
            isHidden: false,
            idx: props.idx,
        }
    }
/*
        this.note = noteContainer;
        this.storageQuery = storageQuery;
        this.idx = idx;
        this.isMemo = isMemo;
        this.header = noteContainer.childNodes[0];
        this.editHeaderBtn = noteContainer.childNodes[1];
        this.minBtn = noteContainer.childNodes[2];
        this.delBtn = noteContainer.childNodes[3];
    
        if (isMemo == false) {
          this.taskInput = noteContainer.childNodes[4];
          this.addBtn = noteContainer.childNodes[5];
          this.undoBtn = noteContainer.childNodes[6];
          this.todoList = noteContainer.childNodes[7];
        }
        else {
          this.memoInput = noteContainer.childNodes[4];
          this.characterCount = noteContainer.childNodes[5];
          this.memoBtn = noteContainer.childNodes[6];
        }
*/

    render() {

        let idx = this.state.idx;
        
        if (this.state.isMemo) {
            return (
                <div className={styles.drag}>
        
                    <input className={styles.dragHeader} maxlength="30" readOnly="true" id={'mydiv' + idx + 'header'} value={'Note ' + idx}></input>
                    <img src={editBtn} className="editHeader" id={styles.edit}/>
                    <img src={minimizeBtn} className="minimize" id={styles.minimize}/>
                    <img src={exitBtn}className="deleteNote" id={styles.exit}/>
                    
                    <textarea placeholder="Type a memo here..." maxlength="600" className="memo" rows="8" spellcheck="false" id={'memo' + idx} style={{display: 'inline-block'}} ></textarea>
                    <p className="memoCounter" id={'memoCounter' + idx}>Max 600 characters</p>
                    <button className="saveMemo">Save Memo</button>
                </div>
            );
        }
        else {
            return (
                <div className={styles.drag}>
                    
                    <input className={styles.dragHeader} maxlength="30" readOnly="true" id={'mydiv' + idx + 'header'} value={'Note ' + idx}></input>
                    <img src={editBtn} className="editHeader" id={styles.edit}/>
                    <img src={minimizeBtn} className="minimize" id={styles.minimize}/>
                    <img src={exitBtn} className="deleteNote" id={styles.exit}/>
                    
                    <input maxlength="250" className="task" placeholder="Add an item" id={'task' + idx} style={{display: 'inline-block'}} /><img src={addBtn} id="add" className={styles.add}></img>
                    <img className={styles.undo} id={'undo' + idx} src={undoBtn}/>
                    <div className="todoLists" id={'todos' + idx}></div>
                </div>
                
            );
        }
    }
}
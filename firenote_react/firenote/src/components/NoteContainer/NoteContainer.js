import React, { Component } from 'react';
import Note from '../Note/Note';
import { addNewNote } from './addNewNote';
import { storeSync } from '../../submodules/storeSync';

import styles from './NoteContainer.module.css';


export default class NoteContainer extends Component {

    constructor(props) {
        super(props);

        // state stores an array of Note props
        this.state = {
            notes: 
                this.props.notes
                /*
                {idx: 5, title: 'test'},
                {idx: 6, title: 'test2'}
                */
            
        }
    }

    addNewNote(isMemo) {

        console.log("This is state: ");
        console.log(this.state);

        let idx = this.state.notes.length;

        // length of the notes array is the next index
        let noteProps = addNewNote(idx, isMemo);

        // State change will cause component re-render
        let notes = this.state.notes;
        notes.push(noteProps);

        this.setState({
            notes: notes
        });
        
    }

    render() {
        console.log("This is props: ");
        console.log(this.props);
   
        console.log("this is state before render: ");
        console.log(this.state);

        return (
            <div>

                <div id={styles.intro}>
                    <div id="centerTitle"><h1 id={styles.fire}>fire</h1><h1>note</h1></div>
                    <p> your customizable workspace for virtual sticky notes and to-do lists.</p>
                    <button onClick={console.log("test")}></button>
                    <hr/><br/>
                    <button onClick={() => this.addNewNote(false)} id={styles.addNote} className={styles.blueBtn}>+ Add New List</button>
                    <button onClick={() => this.addNewNote(true)} id={styles.addMemo} className={styles.blueBtn}>+ Add New Memo</button>
                    <p id="pending"> edit pending save. </p>
                    <p id="darkEnabled">disabled</p>
                </div>
                {
                    this.state.notes.map((item) => (
                        <Note {... item}/>
                    ))
                }
            </div>
        );
    }
}
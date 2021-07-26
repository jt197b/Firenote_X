import React, { Component } from 'react';
import styles from './RightMenu.module.css';
import { toggleDarkMode } from './toggleDarkMode';

export default class RightMenu extends Component {

    
    toggleDarkMode() {
        toggleDarkMode();  
    }

    clearAll() {
        console.log("clear all");
    }

    dockAll() {
        console.log("dock all");
    }

    render() {

        return (
            <div id={styles.menu}>
            <div><button onClick={this.toggleDarkMode} className={styles.collapsible} id="toggleDarkMode">dark mode</button></div>
            <div><button onClick={this.clearAll} className={styles.clear} id="clearAll">clear all</button></div>
            <div><button onClick={this.dockAll} className={styles.clear} id="dockAll">dock all</button></div>
            <div><button className={styles.clear} id="myBtn">quick guide +</button></div>
  
            <div>
              <button className={styles.collapsible}>contact +</button>
              <div className={styles.content}><p>As a first time developer, your support
                is incredibly important to me to improve and build upon this app.
              Feel free to contact me with your ideas, feedback, and bug reports: </p>
              <p><img id="email" src="src/images/email.png"/><a href = "mailto: firenoteapp@gmail.com"> firenoteapp@gmail.com</a></p>
              <p><img id="star" src="src/images/star.png"/><a href="https://chrome.google.com/webstore/detail/firenote-notes-todo-lists/fffpcpifbaimmmmclpmfhjgbiokbhnea?hl=en" target="_blank"> Leave a Review</a></p>
              <p><img id="github" src="src/images/web.png"/><a href="https://sites.google.com/view/firenote" target="_blank"> Firenote Home</a></p>
              <p> I will do my best to respond within 24 hours. If you enjoy this app, you can support me by buying me a coffee with the link below :) </p>
              <p>I'd like to keep this extension free on the Chrome store and develop more features in the future.
                Thank you! </p>
              <p id="signature">- j. tran </p>
              </div>
            </div>
          </div>
        );
    };

}
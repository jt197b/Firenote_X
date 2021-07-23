import './App.css';
import Note from './components/Note/Note';
import RightMenu from './components/RightMenu/RightMenu';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  return (
    <div className="App">

      <div id="container">
      
        <RightMenu/>

        <MainMenu />

        <Note idx="1"></Note>
        <Note idx="2"></Note>

      </div>

    </div>



  );
}

export default App;

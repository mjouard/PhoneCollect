import logo from './logo.svg';
import './App.css';
import Player from 'react-soundcloud-player'

var color = "red"
function log(){
  console.log("Je log TOTO")
}

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(/Iphone 12.jpg")`}}>
      <header className="App-header">
        <img src="http://localhost:3000/Iphone 12.jpg" className="App-logo" alt="logo" />
        <em style={{color: color}}> La balise italique </em>
        <button onClick={() => {color = "blue"}}>Clickez</button>
        <p> Ici Toto PIZZA </p>
        <div style={{display: "flex", flexDirection: "row"}}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a rel="http://youtube.com">Youtube</a>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`http://www.youtube.com/embed/5UFHw3lJhyQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div>
          <Player
            client_id="c5a171200f3a0a73a523bba14a1e0a29"
            audio_id="1073867272"
            title="Easyfun - Fanta"
          />
      </div>
        </div>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Allez sur Youtube
        </a>
      </header>
    </div>
  );
}

export default App;

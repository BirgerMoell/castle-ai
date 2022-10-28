import logo from './castle.png';
import symmetri from "./queen.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <a href="https://discord.gg/3twBZS3D" target="_blank" >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
         Welcome to Castle AI  <span>🏰 🧠</span>
        </p>
        <p>The AI community building the present.</p>

        <a
          className="App-link"
          href="https://discord.gg/3twBZS3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord!
        </a>

        <p>We have a super amazing bot that creates Stable Diffusion images
          from 1.5! Like this one!
        </p>
        <img  className="App-logo" src={symmetri} height="350px" alt="symmetry" />

        
        <h4>Slides</h4>

        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1NjSRYABD6wczBRf_QOee-pCXogbdwjNQpmvI3A6qzpc/edit?usp=sharing          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Stable Diffusion
        </a>

        <p></p>

        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/10HYfRz0Z_LRg9jYNKHCTxnFks2Vjl4GCTcpowRUvGiE/edit?usp=sharing          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Speech and Whisper
        </a>

        <p></p>
      



      </header>


    </div>
  );
}

export default App;

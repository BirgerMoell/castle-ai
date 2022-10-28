import logo from './castle.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        
        <h4>Slides</h4>

        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1NjSRYABD6wczBRf_QOee-pCXogbdwjNQpmvI3A6qzpc/edit?usp=sharing          "
          target="_blank"
          rel="noopener noreferrer"
        >
          Stable Diffusion
        </a>



      </header>


    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Map from './Components/Map'
import Navigation from './Components/Navigation';
import About from './Components/About'
import Check from './Components/Check'
import Resources from './Components/Resources'

function App() {
  return (
    <>
      <div>
        <Navigation/>
        <Map/>
        <About/>
        <Check/>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;

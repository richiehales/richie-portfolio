import './App.css';
import Header  from './features/Header/Header';

function App() {
  return (
    
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          Step 1 - Create Nav Bar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Richie Hales Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;

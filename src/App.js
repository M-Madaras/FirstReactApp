import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First React App!!!</h1>
        <p>
          You Clicked the button {count} Times.
        </p>
        <button onClick={() => {
          console.log('I Clicked The Button');
          count = count++
        }}>Clickable</button>
      </header>
    </div>
  );
}

export default App;

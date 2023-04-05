import './App.css';
import Remainder from './Remainder'

function App() {
  const a={
    backgroundColor:"blue",
    backgroundSize:"cover",
    height:"100vh"
  }
  return (
    <div className="App" style={a}>
      <h1>Remainder App</h1>
      <Remainder/>
    </div>
  );
}

export default App;

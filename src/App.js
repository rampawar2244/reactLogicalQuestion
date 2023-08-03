import logo from './logo.svg';
import './App.css';
import LocalStorage from './components/LocalStorage';


function App() {
  const [name, setName] = LocalStorage('name', 'John')
  const handleChange = (event) =>{
    setName(event.target.value)
  }
  return (
    <div className="App">
      <p>{name}</p>     
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default App;

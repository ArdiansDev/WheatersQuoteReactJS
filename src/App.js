
import './App.css';
import Quote from './Components/Quote';
import Weather from './Components/Wheater';

function App() {
  return (
    <div  className="App"  style={{
      backgroundImage: `url(./img/img1.png)`,
    }}>
      <Weather />
      <Quote />
    </div>
  );
}

export default App;

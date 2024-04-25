import logo from './logo.svg';
import './App.css';
import HomePage from './componants/HomePage';
import jsonData from './data.json';

function App() {
  return (
    <div>
      <HomePage jsondata={jsonData}/>
    </div>
  );
}

export default App;

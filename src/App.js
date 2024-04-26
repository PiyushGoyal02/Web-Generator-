import logo from './logo.svg';
import './App.css';
import HomePage from './componants/HomePage';
import jsonData from './data.json';
import { Route, Routes } from 'react-router-dom';
import Mindfulness from './All Pages/MindfulnessPage1';

function App() {

  return (
    <div>
      {/* <HomePage jsondata={jsonData}/> */}
      <Routes>
        <Route path='/' element={<HomePage jsondata={jsonData}/>}></Route>
        <Route path='/Mindfulness1' element={<Mindfulness jsondata={jsonData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

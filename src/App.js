import logo from './logo.svg';
import './App.css';
import HomePage from './componants/HomePage';
import jsonData from './data.json';
import { Route, Routes } from 'react-router-dom';
import Mindfulness from './All_pages /MindfulnessPage1';
import MindfulnessPage2 from './All_pages /MindfulnessPage2';

function App() {

  return (
    <div>
      {/* <HomePage jsondata={jsonData}/> */}
      <Routes>
        <Route path='/' element={<HomePage jsondata={jsonData}/>}></Route>
        {/* <Route path='/Mindfulness1' element={<Mindfulness jsondata={jsonData}/>}></Route> */}
        {/* <Route path='/Mindfulness2' element={<MindfulnessPage2 jsondata={jsonData}/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

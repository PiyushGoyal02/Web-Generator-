
import './App.css';
import HomePage from './components/HomePage';
import jsonData from './data.json';
import { Route, Routes } from 'react-router-dom';
import NewPage from './components/NewPage';

function App() {

  return (
    <div>
      {/* <HomePage jsondata={jsonData}/> */}
      <Routes>
        <Route path='/' element={<HomePage jsondata={jsonData}/>}></Route>
        <Route path='/page/:pageId' element={<NewPage/>}></Route>
        {/* <Route path='/Mindfulness1' element={<Mindfulness jsondata={jsonData}/>}></Route> */}
        {/* <Route path='/Mindfulness2' element={<MindfulnessPage2 jsondata={jsonData}/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

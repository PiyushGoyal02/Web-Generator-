
import './App.css';
import HomePage from './components/HomePage';
import jsonData from './data.json';
import { Route, Routes } from 'react-router-dom';
import NewPage from './components/NewPage';
import NewPageTwo from './components/NewPageTwo';
import SignIn from './Signin-Signup/SignIn';
import SignUp from './Signin-Signup/SignUp';


function App() {

  return (
    <div>
      {/* <HomePage jsondata={jsonData}/> */}
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/MenuCard' element={<HomePage jsondata={jsonData}/>}></Route>
        <Route path='/page1/:pageId' element={<NewPage/>}></Route>
        <Route path='/page2/:pageId' element={<NewPageTwo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

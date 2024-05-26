import './App.css';
import HomePage from './components/HomePage';
import jsonData from './data.json';
import { Route, Routes } from 'react-router-dom';
import NewPage from './components/NewPage';
import NewPageTwo from './components/NewPageTwo';
import SignIn from './Signin-Signup/SignIn';
import SignUp from './Signin-Signup/SignUp';
import { useState } from 'react';
import MyHistory from './components/MyHistory';


function App() {

  const [AccountType, setAccountType] = useState('User');

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp AccountType={AccountType} setAccountType={setAccountType} />}></Route>
        <Route path='/MenuCard' element={<HomePage AccountType={AccountType} jsondata={jsonData}/>}></Route>
        <Route path='/page1/:pageId' element={<NewPage/>}></Route>
        <Route path='/myHistory' element={<MyHistory/>}></Route>
        <Route path='/page2/:pageId' element={<NewPageTwo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

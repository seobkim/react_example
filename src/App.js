import './App.css';
import LoginForm from './component/LoginForm';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react'
import MainPage from './component/main';
import NoMatch from './component/NoMatch'
import Header from './component/Header';
import CustomerManage from './component/costomer/CustomerManage';



function App() {
  
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState("");


  const loginInfo = (auth,userInfo) =>{
    setAuth(auth);
    setUserInfo(userInfo);
  }

    return (
    <BrowserRouter>
    {/* <Header></Header> */}
    <Routes>
      <Route path ="/" element ={auth ? <MainPage userInfo={userInfo}></MainPage> : <LoginForm loginInfo ={loginInfo}></LoginForm>} />
      <Route path ="/main" element ={auth ? <MainPage userInfo={userInfo}></MainPage> : <LoginForm loginInfo ={loginInfo}></LoginForm>} />  
  
      <Route path ="/customer">
        <Route path ="/customer/manage" element ={auth ? <CustomerManage></CustomerManage> : <LoginForm loginInfo ={loginInfo}></LoginForm>}/>

      </Route>
      <Route path ="/*" element={<NoMatch />} />
    </Routes>
    </BrowserRouter>
    )
}


export default App;


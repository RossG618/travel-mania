import { useState } from 'react';
import './App.css';
import './mainPage.css'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Hotels from './hotels';
import Vacations from './vacations';
// import Users from './profile';
import SignIn from './sign-in';
import AdminProfile from './adminProfile';
import JakeProfile from './jakeProfile';
function App() {
  const [messageShow, setMessageShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false)


  return (
   <div className="App">
    <Router>
    <Header 
    messageShow={messageShow} 
    setMessageShow={setMessageShow}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    />
      <Routes>
        <Route element={<AdminProfile/>} path="/users/admin"/>
        <Route element={<JakeProfile messageShow={messageShow} darkMode={darkMode}/>} path="/users/jacob"/>
        {/* <Route element={<Users/>} path="/profile"/> */}
        <Route element={<SignIn/>} path="/sign-in"/>
        <Route element={<Hotels/>} path='/hotels'/>
        <Route element={<Vacations/>} path='/vacations'/>
        <Route element={<Home/>} exact path='/'/>
      </Routes>
    <Footer/>
    </Router>
   </div>
  );
}

export default App;

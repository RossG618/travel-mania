import { useState } from 'react';
import './App.css';
import './mainPage.css'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Hotels from './hotels';
import Vacations from './vacations';
import { Favorites } from './favArray';
// import Users from './profile';
import Login from './login';
import AdminProfile from './adminProfile';
import JakeProfile from './jakeProfile';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { NotFound } from './NotFound';
export const emptyHeart = faHeart
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [signedIn, setSignedIn] = useState(false);
  const [userId, setUserId] = useState('notUser')


  return (
   <div className="App">
    <Router>
    <Header 
   
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    signedIn={signedIn}
    setSignedIn={setSignedIn}
    userId={userId}
    setUserId={setUserId}
    />
       <Routes>
      <Route path='/fav' element={<Favorites/>} ></Route>

        <Route element={<AdminProfile/>} path="/users/admin"/>
        <Route element={<JakeProfile 
        darkMode={darkMode} 
        signedIn={signedIn}
        />} path="/users/jacob"/>
        {/* <Route element={<Users/>} path="/profile"/> */}
        <Route element={<Login 
        setSignedIn={setSignedIn} 
        setUserId={setUserId}
        />} path="/login"/>
        <Route element={<Hotels/>} path='/hotels'/>
        <Route element={<Vacations/>} path='/vacations'/>
        <Route element={<Home/>} exact path='/'/>
        <Route element={<NotFound/>} exact path='*'/>
      </Routes>
     
    <Footer/>
    </Router>
   </div>
  );
}

export default App;

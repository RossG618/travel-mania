import logo from './logo.svg';
import './App.css';
import './nav.css'

import { navArrary } from './navArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faHeart, faMessage, faNewspaper, faSignOut, faBullhorn, faPhone, faMap, faClock, faBars, faCheck, faX, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { notiesArray } from './notiesArray';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Link, NavLink } from 'react-router-dom';
import {ModalDialog, ModalBody, ModalTitle, ModalHeader,ModalFooter, Button } from 'react-bootstrap';
import { accounts } from './accountsArrary';
//

function Header(props) {
  const [notifacations, setNotifacations] = useState(true);
  const [showDrop, setShowDrop] = useState(false);
  const [showNoties, setShowNoties] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showInfoLike, setshowInfoLike] = useState(false);
  const [showInfoFav, setshowInfoFav] = useState(false);
  const [noties, setNoties] = useState(notiesArray);  
  const [signedIn, setSignedIn] = useState(false);
const {messageShow, setMessageShow} = props;
const {darkMode, setDarkMode} = props;

const count = noties.length;
useEffect((count) => {
    if (count === 0){
      return null;
    }
    document.title = `You clicked ${count} notifactions`;
     toast.info(`You have ${count} notifacations`);
     toast('Please find them in the notifacations icon above');
  }, [])
  
  const showOptInfoFav = () => {
    setshowInfoFav(!showInfoFav)
  }
  const showOptInfoLike = () => {
    setshowInfoLike(!showInfoLike)
  }
  const navBarStyles = 
'nav-item nav-link mx-2  mobile-navitem text-decoration-none';
  const showClass = () => {
    setShowDrop(!showDrop)
  }

  const handleShowNoties = () => {
    setShowNoties(!showNoties)
    
  }
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  const handleDelete = (id) => {
    const notiesCopy = [...noties]
    notiesCopy.splice(id,1)
    setNoties(notiesCopy)
    if (count === 1){
      setShowNoties(!showNoties);
      setNotifacations(!notifacations)
    }
    // setNoties(showNoties.filter(item => item.id === item.id))
  }
  
  
// setTimeout(()=>{
//   if (notieCount <= 5) {
//    setNotieCount(notieCount + 1)
//  }
// }, 500)
 
  return (
    <div className="App">
      <ToastContainer/>
     

        <div className={`position-absolute messages-div ${messageShow ? 'messshow' : 'unshow'} bg-body shadow`}>
          <h1 className='border-bottom'>
          Messages
          </h1>
          <div className='messages'>
             {accounts.map(item => 
            <ModalDialog >
            <ModalHeader closeButton>
            <ModalTitle>
              <h5>

              {item.name}
              </h5>
            </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>User:{item.user} Pass:{item.pass}</p>
              <hr className='' />
            </ModalBody>
            <ModalFooter>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </ModalFooter>
          </ModalDialog>
          )}
          </div>
        

      </div>
      
        
      

      <header className='bg-dark'>
        <div className={`${darkMode ? 'bg-dark':'bg-white'} d-flex justify-content-end align-items-center bg-light px-2`}>

          <ul className='d-flex gap-3 m-0 align-items-center'>
            <li style={{"list-style": "none"}}>
             {darkMode ? 
             <svg onClick={() => setDarkMode(!darkMode)} style={{'fill': 'red'}} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm-.05-3.95q2.1 0 3.575-1.475T19 24q0-2.1-1.475-3.575T13.95 18.95q-2.1 0-3.575 1.475T8.9 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/></svg>
             :
          <svg onClick={() => setDarkMode(!darkMode)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm20.05-3.95q2.1 0 3.575-1.475T39.1 24q0-2.1-1.475-3.575T34.05 18.95q-2.1 0-3.575 1.475T29 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/></svg>
             } 
            </li>
            <li style={{"list-style": "none"}}><Link to="/" className={`${darkMode ? 'text-white': 'text-dark'} gap`} style={{"list-style": "none", "text-decoration": "none"}}>
              <FontAwesomeIcon icon={faPhone} className="mx-2"/>Contact
            </Link></li>
            <li style={{"list-style": "none"}}><Link to="/" className={`${darkMode ? 'text-white' : 'text-dark'}  gap`} style={{"list-style": "none", "text-decoration": "none"}}>
              <FontAwesomeIcon icon={faMap}  className="mx-2"/>Locations
            </Link></li>
            <li style={{"list-style": "none"}}><Link to="/" className={`${darkMode ? 'text-white' : 'text-dark'}  gap`} style={{"list-style": "none", "text-decoration": "none"}}>
              <FontAwesomeIcon icon={faClock}  className="mx-2"/>Open Times
            </Link></li>
          </ul>
        </div>

        <nav className='nav nav-pills justify-content-between py-2 mobile align-items-center'>

        <div className='d-flex align-items-center' id="logo">
          <img src={logo} className="App-logo h-25" alt="logo" width="50px" />
          <a href="/" >
            <h3 className="text-primary" style={{"font-family": " rog fonts"}}>Travel <span className="text-warning text-decoration-none" style={{"font-family": " rog fonts"}}>&gt;Mania</span></h3>
          </a>
          <FontAwesomeIcon icon={faBars} inverse className='menu-mobile ' onClick={handleShowNav}/>
        </div>

        <div className='d-flex align-items-center ' id={`${showNav ? 'reveal' : 'hide'}`}>
          <div className='d-flex mobile-navbar' >
           
          {navArrary.map(item => <li role="button">
            <NavLink className={`${navBarStyles} text-white`} to={item.link}>
            {item.title}
            </NavLink>
            </li>)}
        </div>

        <div className='d-flex align-items-center gap-4 px-2 '>
        <div className="dropdown">
          {notifacations ? 
          <span>
            <span className='numNoties px-2 position-absolute rounded-3 shadow border border-dark'>{count}</span>
            <FontAwesomeIcon icon={faBell} inverse size='lg' shake className='bell' onClick={handleShowNoties}/> 
          </span>
          :
          <FontAwesomeIcon icon={faBell} inverse size='lg'/>
          
        }
       
        <ul className={`dropdown-menu  text-small shadow ${showNoties && 'show'}`} data-popper-placement="bottom-start" style={{ "position": "absolute", "inset":" 0px auto auto 0px", "margin": "0px", "transform": "translate3d(-310px, 34px, 0px)"}}>
         {noties.map((item, id) => <li className="dropdown-item d-flex align-items-center border-bottom gap-3 flex-wrap">
          <div>
            <span className="d-flex align-items-center justify-content-between">
            <h4>{item.title}</h4>
            <FontAwesomeIcon icon={faX} type="button" id={id} onClick={() => handleDelete(id) }/>
            </span>
          <p>{item.desc}</p>
          <p className='text-muted'>{item.date}</p>
          <div className="d-flex flex-column justify-content-end">
            <div className='d-flex gap-3'>

         {showInfoLike && <p className="position-absolute show-info">
              Like this
            </p>}
            <FontAwesomeIcon icon={faCheck} onMouseEnter={showOptInfoLike} onMouseLeave={showOptInfoLike}/>
           {showInfoFav && <p className="position-absolute show-info">
              Add to Favorites
            </p>}
            <FontAwesomeIcon icon={faHeart} onMouseEnter={showOptInfoFav} onMouseLeave={showOptInfoFav}/>
            </div>
            <hr className="w-25 border-bottom" />
          </div>
          </div>
         </li>)}
        </ul>
      </div>
          {/* <FontAwesomeIcon icon={faGear} size="lg" inverse/> */}
          <div className="dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-gear-wide-connected dropdown-toggle show" onClick={showClass}  data-bs-toggle="dropdown" aria-expanded="true" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
</svg>
        <ul className={`dropdown-menu text-small shadow border-none p-0 ${showDrop && 'show'}`} data-popper-placement="bottom-start" style={{"width": "220px", "position": "absolute", "inset":" 0px auto auto 0px", "margin": "0px", "transform": "translate3d(-210px, 34px, 0px)"}}>
          <li className='py-1'><Link to='/users/admin' className="dropdown-item active d-flex align-items-center gap-3" aria-current="page"><FontAwesomeIcon icon={faUser}/>Profile</Link></li>
          <li className='py-1'><Link to='' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faHeart}/>Favorites</Link></li>
          <li className='py-1' onClick={() => setMessageShow(!messageShow)}><button className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faMessage} />Messages</button></li>
          <li className='py-1'><Link to='' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faNewspaper}/>News</Link></li>
          <li><hr className="dropdown-divider mb-0"/></li>
          <li className='py-1'><button className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faBullhorn}/>Reports</button></li>
          {!signedIn &&
          <li className='py-1'><Link to='' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faUserPlus}/>SignUp</Link></li>
          }
          {signedIn ?
            <li className='py-1' onClick={() => setSignedIn(false)}><Link to='/' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faSignOut} />Logout</Link></li> :
            <li className='py-1' onClick={() => setSignedIn(true)}><Link to='/sign-in' className="dropdown-item d-flex align-items-center gap-3" href=""><FontAwesomeIcon icon={faSignIn} />Login</Link></li> 
          }
        </ul>
      </div>
        {/* <img src={logo} className="App-logo h-100" alt="logo" width="50px" /> */}
        </div>
        </div>
        
        </nav>
      </header>
      
    </div>
  );
}

export default Header;

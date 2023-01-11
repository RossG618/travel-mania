import './App.css';
import './nav.css'
import { useState } from 'react';
import { notiesArray } from './notiesArray';
import  Nav  from './nav';

// import { navArrary } from './navArray';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faMap, faClock } from '@fortawesome/free-solid-svg-icons'

// // import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { Contact, Locations, OpenTimes } from './contact';
// import { Messages } from './messages';
//

function Header(props) {
  const [notifacations, setNotifacations] = useState(true);
  const [showDrop, setShowDrop] = useState(false);
  const [showNoties, setShowNoties] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showInfoLike, setshowInfoLike] = useState(false);
  const [showInfoFav, setshowInfoFav] = useState(false);
  const [noties, setNoties] = useState(notiesArray);  
  // const [contact, setContact] = useState(false);
  // const [locations, setLocations] = useState(false);
  // const [openTimes, setOpenTimes] = useState(false);
  //
  const [messageShow, setMessageShow] = useState(false);

const { signedIn, setSignedIn, setUserId, userId} = props;
  // darkMode, setDarkMode, 

// useEffect(() => {
//   toast.info(`You have ${count} notifacations`);
//   toast('Please find them in the notifacations icon above');
//   if (count === 0){
//     return null;
//   }
//   }, [count])
  
//   const showOptInfoFav = () => {
//     setshowInfoFav(!showInfoFav)
//   }
//   const showOptInfoLike = () => {
//     setshowInfoLike(!showInfoLike)
//   }
//   const navBarStyles = 
// 'nav-item nav-link mx-2  mobile-navitem text-decoration-none';
//   const showSettings = () => {
//     setShowDrop(!showDrop)
//   }

//   const handleShowNoties = () => {
//     setShowNoties(!showNoties)
    
//   }
//   const handleShowNav = () => {
//     setShowNav(!showNav)
//   }
//   const closeTabs = () => {
//     showNoties(false)
//     showDrop(false)
//   }
//   const handleDelete = (id) => {
//     const notiesCopy = [...noties]
//     notiesCopy.splice(id,1)
//     setNoties(notiesCopy)
//     if (count === 1){
//       setShowNoties(!showNoties);
//       setNotifacations(!notifacations)
//     }
//     // setNoties(showNoties.filter(item => item.id === item.id))
//   }
//   const Logout =()=>{
//     useNavigate('/login')
//     setSignedIn(false)
//     setUserId('notFound')
//   }

//---

  // useEffect(() => {
  //    if (contact){
  //     setLocations(false)
  //     setOpenTimes(false)
  //   }
  //   if (locations){
  //     setContact(false)
  //     setOpenTimes(false)
  //   }
  //   if (openTimes){
  //     setLocations(false)
  //     setContact(false)
  //   }
  // }, [contact, locations, openTimes])
   
// ----


// setTimeout(()=>{
//   if (notieCount <= 5) {
//    setNotieCount(notieCount + 1)
//  }
// }, 500)
 
  return (
    //   <Messages  
    // ={details}
    // messageShow={messageShow} 
    // setMessageShow={setMessageShow}
    // />
    //  <div className="position-absolute">
    
    //     <Contact contact={contact} setContact={setContact}/>
    //     <Locations locations={locations} setLocations={setLocations} />
    //     <OpenTimes openTimes={openTimes} setOpenTimes={setOpenTimes} />
    //     </div>
    
    //     <div className={`${darkMode ? 'bg-dark':'bg-white'} d-flex justify-content-end align-items-center bg-light px-2`}>
    
    //       <ul className='d-flex gap-3 m-0 align-items-center'>
    //         <li style={{"list-style": "none"}}>
    //          {darkMode ? 
    //          <svg onClick={() => setDarkMode(!darkMode)} style={{'fill': 'red'}} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm-.05-3.95q2.1 0 3.575-1.475T19 24q0-2.1-1.475-3.575T13.95 18.95q-2.1 0-3.575 1.475T8.9 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/></svg>
    //          :
    //       <svg onClick={() => setDarkMode(!darkMode)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm20.05-3.95q2.1 0 3.575-1.475T39.1 24q0-2.1-1.475-3.575T34.05 18.95q-2.1 0-3.575 1.475T29 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/></svg>
    //          } 
    //         </li>
    //         <li  style={{"list-style": "none"}} onClick={() => setContact(!contact)} ><p className={`${darkMode ? 'text-white': 'text-dark'} gap m-0`} style={{"list-style": "none", "text-decoration": "none"}}>
    //           <FontAwesomeIcon icon={faPhone} className="mx-2"/><p className='header-text m-0'>Contact</p>
    //         </p></li>
    //         <li style={{"list-style": "none"}}  onClick={() => setLocations(!locations)}><p className={`${darkMode ? 'text-white' : 'text-dark'}  gap m-0`} style={{"list-style": "none", "text-decoration": "none"}}>
    //           <FontAwesomeIcon icon={faMap}  className="mx-2"/><p className='header-text m-0'>Locations</p>
    //         </p></li>
    //         <li style={{"list-style": "none"}} onClick={() => setOpenTimes(!openTimes)}><p className={`${darkMode ? 'text-white' : 'text-dark'}  gap m-0`} style={{"list-style": "none", "text-decoration": "none"}}>
    //           <FontAwesomeIcon icon={faClock}  className="mx-2"/><p className='header-text m-0'>Open Times</p>
    //         </p></li>
    //       </ul>
    //     </div>
      
      <div className=" header">
    <header className='bg-dark'>

        <Nav 
        userId={userId} 
        setUserId={setUserId} 
        signedIn={signedIn} 
        setSignedIn={setSignedIn} 
        notifacations={notifacations} 
        setShowDrop={setShowDrop}
         showDrop={showDrop} 
         setShowNoties={setShowNoties}
          showNoties={showNoties} 
          showNav={showNav} setShowNav={ setShowNav} 
          setNoties={setNoties} setNotifacations={setNotifacations} 
          showInfoLike={showInfoLike} setshowInfoLike={setshowInfoLike} 
          setshowInfoFav={setshowInfoFav} showInfoFav={showInfoFav} 
          noties={noties} setMessageShow={setMessageShow} 
          messageShow={messageShow}/>
      </header>
     
    </div>
  );
}

export default Header;

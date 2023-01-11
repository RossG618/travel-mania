import logo from './logo.svg';
import './App.css';
import './nav.css'
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navArrary } from './navArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
//import { useEffect } from 'react';

export default function Nav(props){
    const { setUserId, signedIn, setSignedIn, showNav,setShowNav } = props;
      //  notifacations,setShowDrop, showDrop, setShowNoties, showNoties, noties
      //  setNoties, setNotifacations, showInfoLike,setshowInfoLike, setshowInfoFav, showInfoFav, 
   
    // const count = noties.length;
//     useEffect(() => {
// if (count === 0){
//           return null;
//         }
//         toast.info(`You have ${count} notifacations`);
        
//     }, [count])



  // const showOptInfoFav = () => {
  //   setshowInfoFav(!showInfoFav)
  // }
  // const showOptInfoLike = () => {
  //   setshowInfoLike(!showInfoLike)
  // }
  const navBarStyles = 
'nav-item mx-2 mobile-navitem text-decoration-none';

// const showSettings = () => {
  //   setShowDrop(!showDrop)
  // }

  // const handleShowNoties = () => {
  //   setShowNoties(!showNoties)
    
  // }
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  //  const closeTabs = () => {
  //    showNoties(false)
  //    showDrop(false)
  //  }
  // const handleDelete = (id) => {
  //   const notiesCopy = [...noties]
  //   notiesCopy.splice(id,1)
  //   setNoties(notiesCopy)
  //   if (count === 1){
  //     setShowNoties(!showNoties);
  //     setNotifacations(!notifacations)
  //   }
  //   // setNoties(showNoties.filter(item => item.id === item.id))
  // }



  const Logout =()=>{
    useNavigate('/login')
    setSignedIn(false)
    setUserId('notFound')
  }
    //


    return(
<div>
{/* <ToastContainer/> */}

<nav className='nav nav-pills justify-content-around align-items-center py-2 mobile '>

<div className='d-flex align-items-center' id="logo">
  <img src={logo} className="App-logo h-25" alt="logo" width="50px" />
  <a href="/" >
    {/* <h3 className="text-primary rog-font">Travel <span className="text-warning text-decoration-none rog-font">&gt;Mania</span></h3> */}
    <h3 className='colgrad-title rog-font'>Travel/Mania</h3>
  </a>
  <FontAwesomeIcon icon={faBars} size="lg" inverse className='menu-mobile mx-3' onClick={handleShowNav}/>
</div>

<div className='d-flex align-items-center mob-80' id={`${showNav ? 'reveal' : 'hide'}`}>
  <div className='d-flex mobile-navbar mx-4 text-center align-items-center justify-content-center' >
   
  {navArrary.map(item => <li role="button">
    <NavLink className={`${navBarStyles} text-light text-uppercase nav-buttons `} to={item.link}>
    {item.title}
    </NavLink>
    </li>)}
</div>
<div className="d-flex mx-2 mobile-login">
  {
    signedIn ?
  <Link to="/login" className="btn  fw-bold colgrad-logout text-bg-dark" onClick={Logout}>
    Logout
  </Link>
  :
  <span className='d-flex gap-2 mobile'>
  <Link to="/login" className="btn btn-info text-light  fw-bold px-4 ">
    Login
  </Link>
  <Link to="/sign-up" className="btn btn-outline-warning fw-bold">
    Join
  </Link>
  </span>
  }
</div>
   
</div>

</nav>
</div>
    )
}

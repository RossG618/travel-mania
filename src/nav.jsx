import logo from './logo.svg';
import './App.css';
import './nav.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navArrary } from './navArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faHeart, faMessage, faNewspaper, faSignOut, faBullhorn, faBars, faCheck, faX, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//import { useEffect } from 'react';

export default function Nav(props){
    const {userId, setUserId, signedIn, setSignedIn, notifacations,setShowDrop, showDrop, setShowNoties, showNoties, showNav,setShowNav, setNoties, setNotifacations, showInfoLike,setshowInfoLike, setshowInfoFav, showInfoFav, noties, setMessageShow, messageShow} = props;
   
    const count = noties.length;
    useEffect(() => {
if (count === 0){
          return null;
        }
        toast.info(`You have ${count} notifacations`);
        
    }, [count])

  const showOptInfoFav = () => {
    setshowInfoFav(!showInfoFav)
  }
  const showOptInfoLike = () => {
    setshowInfoLike(!showInfoLike)
  }
  const navBarStyles = 
'nav-item nav-link mx-2  mobile-navitem text-decoration-none';
  const showSettings = () => {
    setShowDrop(!showDrop)
  }

  const handleShowNoties = () => {
    setShowNoties(!showNoties)
    
  }
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  const closeTabs = () => {
    showNoties(false)
    showDrop(false)
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
  const Logout =()=>{
    useNavigate('/login')
    setSignedIn(false)
    setUserId('notFound')
  }
    //
    return(
<div>
<ToastContainer/>

<nav className='nav nav-pills justify-content-between align-items-center py-2 mobile '>

<div className='d-flex align-items-center' id="logo">
  <img src={logo} className="App-logo h-25" alt="logo" width="50px" />
  <a href="/" >
    {/* <h3 className="text-primary rog-font">Travel <span className="text-warning text-decoration-none rog-font">&gt;Mania</span></h3> */}
    <h3 className='colgrad-title rog-font'>Travel/Mania</h3>
  </a>
  <FontAwesomeIcon icon={faBars} size="lg" inverse className='menu-mobile mx-3' onClick={handleShowNav}/>
</div>

<div className='d-flex align-items-center ' id={`${showNav ? 'reveal' : 'hide'}`}>
  <div className='d-flex mobile-navbar mx-4' >
   
  {navArrary.map(item => <li role="button">
    <NavLink className={`${navBarStyles} text-white nav-buttons`} to={item.link}>
    {item.title}
    </NavLink>
    </li>)}
</div>
<div className="d-flex ">
  {
    signedIn ?
  <Link to="/login" className="btn  fw-bold colgrad-logout text-bg-dark" onClick={Logout}>
    Logout
  </Link>
  :
  <span className='d-flex gap-2 mobile'>
  <Link to="/login" className="btn btn-info text-light fw-bold px-4 ">
    Login
  </Link>
  <Link to="/sign-up" className="btn btn-outline-warning fw-bold">
    Join
  </Link>
  </span>
  }
</div>
<div className='d-flex align-items-center gap-4 px-2 mx-3' >
<div className="dropdown z-99">
  {notifacations ? 
  <span>
    <span className='numNoties px-2 position-absolute rounded-3 shadow border border-dark'>{count}</span>
    <FontAwesomeIcon role="button" icon={faBell} inverse size='lg' shake className='bell' onClick={handleShowNoties}/> 
  </span>
  :
  <FontAwesomeIcon icon={faBell} inverse size='lg'/>
  
}

<ul className={`dropdown-menu  text-small shadow ${showNoties && 'show'} z-99`} data-popper-placement="bottom-start" 
style={{ "position": "absolute", "inset":" 0px auto auto 0px", "margin": "0px", "transform": "translate3d(-310px, 34px, 0px)"}} onClick={closeTabs}>

 {noties.map((item, id) => <li className="dropdown-item d-flex align-items-center border-bottom gap-3 flex-wrap pb-2">
  <div>
    <span className="d-flex align-items-center justify-content-between">
    <h4>{item.title}</h4>
    <FontAwesomeIcon role="button" icon={faX} type="button" id={id} onClick={() => handleDelete(id) }/>
    </span>
  <p>{item.desc}</p>
  <p className='text-muted'>{item.date}</p>
  <div className="d-flex flex-column justify-content-end">
    <div className='d-flex gap-3 justify-content-end'>

 {showInfoLike && <p className="position-absolute show-info">
      Like this
    </p>}
    <FontAwesomeIcon icon={faCheck} onMouseEnter={showOptInfoLike} onMouseLeave={showOptInfoLike}/>
   {showInfoFav && <p className="position-absolute show-info">
      Add to Favorites
    </p>}
    <FontAwesomeIcon icon={faHeart} onMouseEnter={showOptInfoFav} onMouseLeave={showOptInfoFav}/>
    </div>
    {/* <hr className=" border-bottom" /> */}
  </div>
  </div>
 </li>)}
</ul>
</div>
  {/* <FontAwesomeIcon icon={faGear} size="lg" inverse/> */}
  <div className="dropdown z-99">
<svg xmlns="http://www.w3.org/2000/svg" role="button" width="32" height="32" fill="white" className="bi bi-gear-wide-connected dropdown-toggle show" onClick={showSettings}  data-bs-toggle="dropdown" aria-expanded="true" viewBox="0 0 16 16">
<path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
</svg>
<ul className={`dropdown-menu text-small shadow border-none p-0 z-99 ${showDrop && 'show'}`} onClick={showSettings} data-popper-placement="bottom-start" style={{"width": "220px", "position": "absolute", "inset":" 0px auto auto 0px", "margin": "0px", "transform": "translate3d(-210px, 34px, 0px)"}}>
  <li className='py-1'><Link to={`/users/${userId}`} className="dropdown-item active d-flex align-items-center gap-3" aria-current="page"><FontAwesomeIcon icon={faUser}/>Profile</Link></li>
  <li className='py-1'><Link to='/fav' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faHeart}/>Favorites</Link></li>
  <li className='py-1' onClick={() => setMessageShow(!messageShow)}><button className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faMessage} />Messages</button></li>
  <li className='py-1'><Link to='' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faNewspaper}/>News</Link></li>
  <li><hr className="dropdown-divider mb-0"/></li>
  <li className='py-1'><button className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faBullhorn}/>Reports</button></li>
  {!signedIn &&
  <li className='py-1'><Link to='/sign-up' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faUserPlus}/>SignUp</Link></li>
  }
  {signedIn ?
    <li className='py-1'><Link to='/' className="dropdown-item d-flex align-items-center gap-3"><FontAwesomeIcon icon={faSignOut} />Logout</Link></li> :
    <li className='py-1'><Link to='/login' className="dropdown-item d-flex align-items-center gap-3" href=""><FontAwesomeIcon icon={faSignIn} />Login</Link></li> 
  }
</ul>
</div>
{/* <img src={logo} className="App-logo h-100" alt="logo" width="50px" /> */}
</div>
</div>

</nav>
</div>
    )
}
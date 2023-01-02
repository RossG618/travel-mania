import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css'
//
export default function SignUp(props){
    const [passReveal, setPassReveal] = useState(false)
    const [remember, setRemember] = useState(false);
   
    const [error, setError] = useState("")
    const {setSignedIn, setUserId, details, setDetails} = props;

    //
    const admin = {username: "admin", password: "admin"};
    const jake = {username: "jacob", password: "Kinzz6"};
    const Guest = {username: "guest"};

    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();
      // dispatch(Login({username: username, password: password}));
      // imperatively redirect the user to /profile
      if (details.username === admin.username && details.password === admin.password){
        // setUser({username: details.username, password:details.password});
        // dispatch(logIn({username: details.username, password:details.password}));
        navigate('/users/admin')
        setSignedIn(true)
        setUserId('admin')
        console.log('logged in')
      }else if(details.username === jake.username && details.password === jake.password){
        navigate('/users/jacob')
        setSignedIn(true)
        setUserId(`jacob`)
      }else if(details.username === Guest.username){
        navigate('/users/Guest')
        setSignedIn(true)
        setUserId(`guest`)
      }else {
        console.log('Wrong passkey');
        setError("Wrong Details / input field empty");
        setSignedIn(false)
      }
    }
    // const verifyAuto = () => {

    // }
    // const rememberMe = () =>{
        
    // }
    return(
        <main className="form-signin App d-flex align-items-center" style={{'background-color': '#7b7'}}>
          <form type="submit" className="signin-form container p-3 shadow bg-dark " onSubmit={handleSubmit}>
                <a href="/" >
                    <h1 className="text-primary rog-font" >T<span className="text-warning text-decoration-none rog-font" >/M</span></h1>
                  </a>
            <h1 className="h3 mt-3 fw-normal text-white">Join us</h1>
            <p className="text-center text-white mb-3">Enter details </p>
            <p className="mb-0" style={{color: "red"}}>
                {error}
            </p>
            <div className="form-floating">
              <input
              id="firstname floatingInput"
              name="firstname"
              onChange={e => setDetails( {...details, firstName: e.target.value})}
              value={details.firstName}
              type="text" className="form-control rounded-3"  placeholder="name@example.com"/>
              <label for="floatingInput">First Name</label>
            </div>
            <div className="form-floating input-group mt-2 mb-3">
              <input
              id="lastname floatingInput"
              name="lastname"
              onChange={e => setDetails( {...details, lastName: e.target.value})}
              value={details.lastName}
              type="text" className="form-control rounded-3" placeholder="lastname"/>
              
              <label for="floatingInput">Last Name</label>
            </div>

            <div className="form-floating input-group">
              <input
              id="username floatingInput"
              name="username"
              onChange={e => setDetails( {...details, username: e.target.value})}
              value={details.username}
              type="text" className="form-control rounded-0 rounded-top" placeholder="username"/>
              
              <label for="floatingInput">Username</label>
            </div>
    
            <div className="form-floating input-group">
              <input
              id="password floatingPassword"
              name="password"
              onChange={e => setDetails( {...details, password: e.target.value})}
              value={details.password}
              type={passReveal ? 'text' : "password"}
              className="form-control pass-bar" placeholder="Password"/>
              <div className="input-group-append">

              <span className="input-group-text reveal-icon h-100" onClick={() => setPassReveal(!passReveal)}>
                {passReveal ? 
                <FontAwesomeIcon type="button" icon={faEye} /> :
                <FontAwesomeIcon type="button" icon={faEyeSlash}/>
                }
              </span>
              </div>
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mt-1 mb-3">
              <label className="text-white">
                <input  type="checkbox" value="remember-me" onClick={() => setRemember(!remember)}/> Remember me
              </label>
            </div>
            <div className="d-flex flex-column align-items-center">

            <button className="w-75 btn btn-lg btn-primary" type="submit">Sign in</button>
            <small class="text-muted mt-2">By clicking Sign up, you agree to the terms of use.</small>
            </div>
                  <span className="d-flex align-items-center my-3">

                  <hr className="border-bottom w-50 mx-2"/>
                  <p className="text-light m-0">or</p>
                  <hr className="border-bottom w-50 mx-2"/>
                  </span>
                  <h2 className="fs-5 fw-bold mb-3 text-white">Or use a third-party</h2>
                  <button className="w-100 py-2 mb-2 btn  btn-outline-success rounded-3" type="submit">
                    <svg className="bi me-1 " width="16" height="16"><use href="#twitter"></use></svg>
                    Sign up with Twitter
                  </button>
                  <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                    <svg className="bi me-1" width="16" height="16"><use href="#facebook"></use></svg>
                    Sign up with Facebook
                  </button>
                  <button className="w-100 py-2 mb-2 btn  btn-outline-secondary rounded-3" type="submit">
                    <svg className="bi me-1" width="16" height="16"><use href="#github"></use></svg>
                    Sign up with GitHub
                  </button>
            <p className="mt-5 mb-1 text-muted">© 1991-2022</p>
            <p className=" mb-1 text-muted">Travel Mania&trade;</p>
          </form>
        </main>
    )
}
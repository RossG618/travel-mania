import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProgressBar from "./percentageBar";
import './profile.css'
import { nanoid } from 'nanoid';
import { jobDeets, jobHistory } from './jobDetails';
import { faGraduationCap, faHistory, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

//

export default function JakeProfile(props){
    const [show, setShow] = useState(false)
    const {messageShow} = props
    const {darkMode} = props
    const {signedIn} = props
    //
    
      const navigate = useNavigate();
      if (!signedIn){
         navigate('/login');
      }

    // const [completed, setCompleted] = useState(0);

    // useEffect(() => {
    //   setCompleted(Math.floor(Math.random() * 100) + 1)
    // }, []);
    const testData = [
        {title: 'Funds remaining', bgcolor: "#6a1b9a", completed: 60, },
        {title: 'Avaliability left', bgcolor: "#ef6c00", completed: 30, },
      ];

    const lineLimt3 = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
    

    return(
        <div className={`${messageShow && 'bg-shadow'} ${darkMode ? 'bg-dark':'bg-blood'}`}>
            
            <div className="container mt-0 d-flex gap-3 pt-3 p-0 shadow-sm rounded flex-wrap profile-bar ">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-4 " src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/154416524_10159522056229203_4571259671155449589_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OoSjEaF2liYAX_J2MoL&_nc_ht=scontent-lhr8-1.xx&oh=00_AfDlOYFBdiqCgGA2xYhvMslZkIj2r3CBHLOPEMxA6qraVw&oe=63D6CD3F" alt="profile-img" />
        
        <div className="d-flex flex-column text-start info bg-body">
            <div className="d-flex justify-content-between align-items-baseline mt-4">
                <span>
                    <h2 className="m-0  fw-normal">Jacob Gardner</h2>
                    <p className=" text-muted">Full-Stack Dev with experience in REACT, NODE.js, C#, Java and Python</p>
                </span>
                <div className="d-flex align-items-center gap-2 px-3">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/niko619"><svg style={{'fill': '#5656af'}} width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/?lang=en"><svg width="25" height="25" style={{'fill': '#3aa3d9'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><svg className="insta rounded" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                </div>
            </div>
            <hr className="mx-3"/>


        <div className="d-flex flex-wrap profile-choices">
        <div className="d-flex flex-column col mb-5 mx-3 about-info">
        <h5><strong>About</strong></h5>
        <p style={lineLimt3}>I have been to the five wonders of the world and climbed mt. Everest, i know chinese, spanish and german i also love skydiving, social activities like bowling, paintball.</p>
        <p className="my-2 btn align-self-start"><button className="btn btn-secondary">View details »</button></p>
        </div>
        <div class="row row-cols-2 col  mb-2">
    <div class="col text-center">
        <h4>Favorite Places:</h4>
        <p>England, Norway, Russia</p> 
    
    </div>
    <div class="col text-center">
    <h4>Budget Limit:</h4>
        <p>£ 1250</p>
    
    </div>
    <div class="col text-center">
        <h4>Peoples:</h4>
        <p>two adults + three children</p>
    
    </div>
    <div class="col text-center">
    <h4>Depart Location:</h4>
        <p>England</p> 
    
    </div>
  </div>
        </div>
        </div>
        <div className="d-flex justify-content-center border-top py-3 bg-body">

        <div className="d-flex flex-wrap  row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center g-3">

        {testData.map(item => (
        <div class="card m-2 shadow-sm shadow-sm-hov" >
        <div class="card-body px-0 ">
          <h5 class="card-title text-start mb-3" style={{'color': '#3aa3d9'}}>{item.title}</h5>
            <ProgressBar key={nanoid()} bgcolor={item.bgcolor} completed={item.completed} />
          {/* <div className=" p-2  border rounded-pill percentage"></div> */}
          {/* <h6 class="card-subtitle my-2 text-muted">{item.completed}%</h6> */}
          <p class="card-text my-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="flex-wrap justify-content-center d-flex mt-3">

          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill"><button className="px-3 text-white">Get more</button></p>
          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill"><button className="px-3 text-white">Cheaper</button></p>
          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill px-auto"><button className="px-3 text-white">Offers</button></p>
          </div>
        </div>
        </div>
      ))}
      { jobDeets.map(item => (
        <div class="card m-2 shadow-sm shadow-sm-hov" >
        <div class="card-body text-start mx-2 ">
          <h6 class="card-title" style={{'color': '#3aa3d9'}}><FontAwesomeIcon className="position-absolute icon-heading" icon={faGraduationCap}/>Job Details</h6>
          {/* <div className=" p-2  border rounded-pill percentage"></div> */}
          <p class="card-text my-2"><span className="text-muted ">Name:</span>{item.title}</p>
          <p class="card-text my-2"><span className="text-muted ">Job title:</span>{item.job}</p>
          <p class="card-text my-2"><span className="text-muted ">Job type:</span>{item.employmentType}</p>
          <p class="card-text my-2"><span className="text-muted ">Salary:</span>{item.salary}</p>
          <p class="card-text my-2"><span className="text-muted ">Manager:</span>{item.manager}</p>
          <p class="card-text my-2"><span className="text-muted ">Job start:</span>{item.start}</p>
          <hr className="mx" />

          <div className="flex-wrap justify-content-center d-flex mt-3">
          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill"><button className="px-3 text-white">Get more</button></p>
          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill"><button className="px-3 text-white">Cheaper</button></p>
          <p className="d-flex bg-secondary mx-1 py-1 rounded-pill px-auto"><button className="px-3 text-white">Offers</button></p>
          </div>
        </div>
        </div>
      ))
      }
              <div className={` flex-column overflow-scroll h-50 job-history ${show ? 'show-history' : 'hide-history'}`} >
        {jobHistory.map(item => (
            <div class="card" >
        <div class="card-body text-start" onClick={() => setShow(!show)}>
          <h6 class="card-title mx-4" style={{'color': '#3aa3d9'}}><FontAwesomeIcon className="position-absolute icon-heading-hist" icon={faHistory}/>Job History</h6>

          {/* <div className=" p-2  border rounded-pill percentage"></div> */}
          <p class="card-text my-1"><span className="text-muted mx-1">Name:</span>{item.company}</p>
          <p class="card-text my-1"><span className="text-muted mx-1">Time:</span>{item.lengthOfStay}</p>
          <p class="card-text my-1"><span className="text-muted mx-1">Position:</span>{item.position}</p>
        </div>
        </div>
        ))
      }
      </div>

      
      
        </div>
        <FontAwesomeIcon icon={faLandmark} size="xl" className="job-history-icon text-primary" onClick={() => setShow(!show)}/>

        </div>
      </div>
           
        </div>
    )
}
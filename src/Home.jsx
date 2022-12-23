import './App.css';
import './mainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCheck } from '@fortawesome/free-solid-svg-icons';
import { selectArray } from './selectionArray';
export default function Home() {
 
//  const lineTextStyle = {
//     maxWidth: '100%',
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: 2,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   };
  const heroPics = 'shadow img-fluid position-absolute rounded';
  // const handlePriceSelectInfo = (e) => {
  //   const key = e.target.key;
  // }
  return (
    <div className="App">
      <div className=" px-4 pt-5 Hero App-Hero ">
    <div className=" container-fluid row flex-lg-row-reverse align-items-center justify-content-center g-5 p-5 ">
      <div className=" col-10 col-sm-8 col-lg-6  position-relative">
        <img src="https://www.travelscout24.de/wp-content/uploads/sites/14/Discount-Travel.jpg "
         className="d-block mx-lg-auto img-fluid rounded-2" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
         <img className={`${heroPics} pic1-hero`} src="https://www.travelmarvel.com.au/-/media/apt-responsive-website/miscellaneous/hero-panel-12-5/generic-12-5/hc-a-generic-map-travel-destinations-419995780-s-12-5.jpg?useCustomFunctions=1&rw=2280&w=1900&h=950&cropX=304&cropY=0" width="700" height="500" loading="lazy" alt="" />
         <img className={`${heroPics} pic2-hero`} src="https://www.urtravelhelper.com/wp-content/uploads/2019/10/5ef595685c354e35adcf8137dcb963d9-1024x768.jpg" width="500" height="500" loading="lazy" alt="" />
      </div>
      <div className="col-lg-6 text-start hero-header">
        <h1 className="display-5 text-white fw-bold lh-1 mb-4 text-capitalize"><strong className='nabla fw-bold display-1'>Insane</strong><br/> travel madness</h1>
        <p className="lead text-white">Holidays, Theme parks Resorts and Viking-like cruises are just a few of the many choices of vacations perfect for a fortnight of family fun and Relaxation</p>
        <div className="d-grid d-flex flex-row gap-2 d-md-flex justify-content-center">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button " className="btn btn-outline-secondary btn-lg px-4 text-light">Default</button>
        </div>
      </div>
    </div>
  </div>
  <div className='container' >

    <div className="row row-cols-1 row-cols-md-3  mb-4 text-center mt-3 pt-4 flex-wrap">
      <div key='free' className="col price ">
        <div className="card mb-4 rounded-2 shadow-sm">
          <div className="card-header py-3" style={{"background": "#2c3"}}>
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">£125<small style={{"font-size": "30px"}} className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> 2 weeks of activities</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> includes 3 paid meals and free drinks</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> spaceous accomerdations</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> travel to exquisite countries of the world</li>
            </ul>
            <button type="button" className="w-50 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div key='pro' className="col pop-tagDiv">
        <div className="card mb-4 rounded-0 shadow ">
          <div className="card-header p-0 overflow-hidden rounded-0">
            <img className="image-cut " alt='pop-img' src='https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/canary-islands-fuerteventura-1547025436-785X440.jpg'/>
            <FontAwesomeIcon icon={faTag} className="position-absolute pop-tag" size='2x' rotation={270}/>
          </div>
          <div className="card-body p-0">
            <h1 className="card-title pricing-card-title border-bottom border-primary rounded-4 ">£250<small style={{"font-size": "30px"}} className="text-info fw-light">/pp</small></h1>
            {/* <ul className="list-unstyled mt-3 mb-4 text-start">
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> 2 weeks of activities</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> includes 3 paid meals and free drinks</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> Exectutive suite and full mini-bar</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> travel to exquisite countries of the world</li>
            </ul>
            <button type="button" className="w-75 btn btn-lg btn-primary" ><a className='text-bg-primary text-decoration-none' href="">Get started</a></button> */}
          </div>
        </div>
      </div>
      <div key='enterprise' className="col price">
        <div className="card mb-4 rounded-1 overflow-hidden shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary  border-primary ">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">£<small style={{"font-size": "30px"}} className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> 2 weeks of activities</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> includes 3 paid meals and free drinks</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> spaceous accomerdations</li>
              <li><FontAwesomeIcon icon={faCheck} className="mx-2" style={{"color": "#2c3"}}/> travel to exquisite countries of the world</li>
            </ul>
            <button type="button" className="w-50 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6 text-center mb-4">Compare plans</h2>

    <div className="table-responsive container bg-white shadow-sm rounded">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{"width": "34%"}}></th>
            <th style={{"width": "22%"}}>No. People</th>
            <th style={{"width": "22%"}}>Locations</th>
            <th style={{"width": "22%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {
            selectArray.map(item => <tr>
              <th>{item.title}</th>
              <td>{item.maxNumPersons}</td>
              <td>{item.locations}</td>
              <td>{item.startPrice}</td>
            </tr>)
          }
          {/* <tr>
            <th scope="row" className="text-start">Public</th>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Private</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr> */}
        </tbody>

        {/* <tbody>
          <tr>
            <th scope="row" className="text-start">Permissions</th>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Sharing</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Unlimited members</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
        </tbody> */}
      </table>
    </div>
  </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}


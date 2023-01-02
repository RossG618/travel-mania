import './App.css';
import './mainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCheck } from '@fortawesome/free-solid-svg-icons';
import { selectArray } from './selectionArray';
//
export const lineTextStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
export default function Home(props) {
  const {darkMode} = props;
  const heroPics = 'shadow img-fluid position-absolute rounded';
  // const handlePriceSelectInfo = (e) => {
  //   const key = e.target.key;
  // }

  return (
    <div className={`App ${darkMode ? 'App-HeroContainer' : 'App-Hero'}`}>
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
          <button type="button" className="btn btn-info text-light fw-bold btn-lg px-4 me-md-2">Primary</button>
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
            <button type="button" className="px-3 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div key='pro' className="col pop-tagDiv">
        <div className="card mb-4 rounded-0 rounded-bottom shadow border-bottom border-primary ">
          <div className="card-header p-0 overflow-hidden rounded-0 m-0">
            <img className="image-cut " alt='pop-img' src='https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/canary-islands-fuerteventura-1547025436-785X440.jpg'/>
            <FontAwesomeIcon icon={faTag} className="position-absolute pop-tag" size='2x' rotation={270}/>
          </div>
          <div className="card-body p-0">
            <h1 className="card-title pricing-card-title border-primary">£250<small style={{"font-size": "30px"}} className="text-info fw-light">/pp</small></h1>
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
            <button type="button" className="px-4 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 className={`display-6 ${darkMode && 'text-light'} text-center mb-4`}>Compare plans</h2>

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
  <div class="d-flex flex-md-equal pb-3 my-md-3 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xxl-5 g-3 mx-0 justify-content-center">
    <div class="bg-light me-md-3 py-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden">
      <div class="my-3 ">
        <h2 class="display-5">Entertainment</h2>
        {/* <p class="lead">Laugh, cry, enjoy your selves in severals different ways</p> */}
      </div>

      <img style={{"width":"80%", "height": "35%",}} className="rounded-4 image-adjust" src="https://res.cloudinary.com/dfbe6xcrt/image/upload/w_1100,h_675,c_fill/expose/iconinc/images/iconincs-cinema-friends-watching-movie.jpg" alt="img" />
      <img style={{"width":"35%", "height": "35%"}} className="rounded-4 m-2  image-adjust" src="https://ichef.bbci.co.uk/images/ic/640x360/p02vmp73.jpg" alt="img" />
      <img style={{"width":"35%", "height": "35%"}} className="rounded-4 m-2  image-adjust" src="https://ichef.bbci.co.uk/images/ic/640x360/p02vmp73.jpg" alt="img" />

    </div>
    <div class="text-bg-primary me-md-3 py-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden">
      <div class="my-3">
        <h2 class="display-5">Leisure</h2>
        {/* <p class="lead">Luxury and leisure in all  flavors</p> */}
      </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sunbathing_couple.jpg/1024px-Sunbathing_couple.jpg"
        style={{"width":"80%", "height": "35%"}} className="rounded-4 image-adjust"
         alt="img" />
        <img src="https://cdn.shopify.com/s/files/1/0162/2116/files/people-2604149_1280_cd93e663-dd4a-47c5-b92c-189c1645b326.jpg?v=1576756194"
        style={{"width":"35%", "height": "35%"}} className="rounded-4  m-2 image-adjust"
         alt="img" />
        <img src="data:image/jpeg;base64,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"
        style={{"width":"35%", "height": "35%"}} className="rounded-4  m-2 image-adjust"
         alt="img" />
      {/* <div class="bg-light shadow-sm mx-auto" style={{"width":"80%", "height": "300px", "border-radius": "21px 21px 0 0"}}></div> */}
    </div>
    <div class="bg-light me-md-3 py-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden">
      <div class="my-3">
        <h2 class="display-5">Fun 4 Kids</h2>
        {/* <p class="lead">Children can play together at anytime wether it's in the play ground, Laser tag or at a waterpark.</p> */}
      </div>
      <img style={{"width":"80%", "height": "35%",}} className="rounded-4 image-adjust" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg" alt="img" />
      <img style={{"width":"35%", "height": "35%"}} className="rounded-4 m-2 image-adjust" src="https://www.cunninghamandmears.com/wp-content/uploads/2019/05/Keeping-Your-Kids-Safe-on-Water-Slides-.jpeg" alt="img" />
      <img style={{"width":"35%", "height": "35%"}} className="rounded-4 m-2 image-adjust" src="https://www.adventureswales.co.uk/wp-content/uploads/2020/10/laser-tag-party-1024x621.jpg" alt="img" />
    </div>
    <div class="text-bg-primary me-md-3 py-3 px-3 pt-md-3 px-md-5 text-center overflow-hidden">
      <div class="my-3 ">
        <h2 class="display-5">Clubs</h2>
        {/* <p class="lead">Enjoy some time socialising with people of similar in calm, quiet enviroment in any one of our many social clubs.</p> */}
      </div>
      
      <img style={{"width":"80%", "height": "35%",}} className="rounded-4 image-adjust"  src="https://assets-global.website-files.com/620d33583b1d5d3a4049c7ed/623dd8133536f5a7e9b24155_KW_3305_Archery.jpg" alt="img" />
      <img style={{"width":"35%", "height": "35%",}} className="rounded-4 m-2 image-adjust shadow-sm" src="https://images.squarespace-cdn.com/content/v1/60a7a8e618844e32d8fce05f/1623236944430-LRV9PDVESYHOMMJ5J2B0/Social-Club-Logo-2018-Logo-Colour.png" alt="img" />
      <img style={{"width":"35%", "height": "35%",}} className="rounded-4 m-2 image-adjust" src="https://s.rsg.sc/sc/images/og/socialclub.png" alt="img" />
      {/* <div class="bg-light shadow-sm mx-auto" style={{"width":"80%", "height": "300px", "border-radius": "21px 21px 0 0"}}></div> */}
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


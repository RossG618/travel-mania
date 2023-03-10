import { cruisesArrary } from './cruisesAndThemeparks';
import { Timer } from './timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { emptyHeart } from './App';
import { useState } from 'react';
import'./vacations.css';
//

export default function Vacations() {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);
    const [isFav, setIsFav] = useState(false)
    const [favsList, setFavsList] = useState([])
    // const [items, setItems] = useState([{title:"test", favourite:false}]);
//
const addFavorite = (id) =>{
  setIsFav(true)
  handleAddFav(id)
}
const handleAddFav = (id) => {
  const favCopy = [...favsList]
  favCopy.splice(0, 0, id)
  setFavsList(favCopy)
  
}

const removeFavorite = (id) =>{
  setIsFav(false)
  handleDelete(id)
}
const handleDelete = (id) => {
  const favCopy = [...favsList]
  favCopy.splice(id, 1)
  setFavsList(favCopy)
}

// const handleFavToggle = (index) => {
//   setItems(items => {
//      const data = [...items]
//      data[index] = {...data[index],favourite: !data[index].favourite }
//      return data
//   })
// }

// addToFavorite = id => {
// const data = this.state.books.find(item => item.id === id);
// this.setState({
//   booksfav: [...this.state.booksfav, data]
// });
// };

// deleteToFavorite = id => {
// const hapus = this.state.booksfav.filter(item => item.id !== id);
// this.setState({ booksfav: hapus });
// };

// addNewBook = data => {
// this.setState({
//   books: [data, ...this.state.books]
// });
// };

    const vacayRatin = () => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">
                <FontAwesomeIcon icon={faStar}/>
            </span>
          </button>
        );
      })}
    </div>
  );
    }

    return ( 
        <div>
            <main className='App'>

            <section class="bg-dark mt-3 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto pt-2">
                <h1 class="fw-light text-white">Cruises & Theme Parks</h1>
                <p class="lead text-muted">Something for the everyone, wether it's just two people who want a getaway to the scandanavian seas and shore or maybe for all-round family fun at a theme of yourr choice .</p>
                <p>
                    <button class="btn btn-primary m-2">Main call to action</button>
                    <button class="btn btn-secondary m-2">Secondary action</button>
                </p>
                </div>
            </div>
            </section>

            <div class="album py-5 bg-light">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cruisesArrary.map((item, id) =>
                <div class="col ">
                    <div class="card overflow-hidden shadow-sm border-warning">
                        <img src={item.pic} alt="thumb img" height="300" />
                    <div class="card-body">
                    {isFav ? 
                    <FontAwesomeIcon role="button" id={id} onClick={() => removeFavorite(id)} className='favIcon' icon={faHeart}/> 
                    :
                    <FontAwesomeIcon role="button" id={id} onClick={() => addFavorite(id)} className='favIcon' icon={emptyHeart}/>
                    }
                    
                    <h3>{item.title}</h3> 
                   
                    
                        <span>{vacayRatin()}</span>
                        <p class="card-text mt-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Book</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small class="text-muted">Offer ends in <Timer/></small>
                        </div>
                    </div>
                    </div>
                </div>
                        )}
                
                </div>
            </div>
            </div>

            </main>
        </div>
     );
}
 
import React from 'react';
import './App.css';

import {Link, Outlet} from 'react-router-dom'

const MovieCard = ({movie, movies}) => {

  return( 
       <Link to={`/description/${movie.id}`} > 


      
<div className='container1'> 
<div className="movie_card" id="bright">

{/* <div className="movie_header"> */}
  <div className="film-image">
    <img className='image'  src={movie.img}/>
    </div>

<div className='movie_title'> 
<h6>{movie.title}</h6>
</div>

{/* <div className='text'>
  <p >{movie.description} </p>
</div> */}
<div  className='Stars'>
  
</div>

</div>
</div>
{/* </div>   */}
  
  </Link>
 
  )}
;
export default MovieCard;



// ///////////////////////
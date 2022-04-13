import React, {useState} from 'react';

import './App.css'

const Search = ({search,setRate,newRate}) => {
const [rating, setRating] = useState(1);
const onStarClick=(nextValue, prevValue, name) => {
    setRate(nextValue);
  }
 
  return (
  
  <div className="input">
    <input  type="text" placeholder="Search a movie" onChange={(e)=>search(e.target.value)} />
    
  </div>
  );
};

export default Search;

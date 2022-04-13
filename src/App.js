import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Outlet} from 'react-router-dom'
import Home from './Home'
import Description from './Description';


function App() {
  const [keysearch, setKeysearch] = useState("");
  const [newRate, setNewRate] = useState(1);
  const [movies,setMovies]=useState([
    {
      id:1,
      title: "The Godfather",
      img: "./thegodfather.jpg",
      description: "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York.",
      trailer: "https://www.thegodfathersofficial.com/",
      rating: 5,
      
    },
    {
      id:2,
      title: "The Shawshank",
      img: "./theshawshank.jpg",
      description: "The Shawshank Redemption has become a classic film - it's even IMDb's top-rated movie of all time.",
      trailer: "https://shawshanktrail.com/",
      rating: 4,
      
    },
    {
      id:3,
      title: "Braveheart",
      img: "./braveheart.jpg",
      description: "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler . ",
      trailer: "https://www.paramount.com/movies/braveheart",
      rating: 3,
     
     }
 
  ]);
  
  const search=(text)=>{
  setKeysearch(text) 
  }
  const setRate=(rate)=>{
    setNewRate(rate)
  }
  const addMovie = (movie) => {
    setMovies(movies.concat(movie))
  }
  return (
    <div className='App'>
      
      <h1 className='title'>The Best Movies of All Time</h1>
           <div className='Search'> <Search search={search} setRate={setRate} newRate={newRate}/> </div>
           <MovieList addMovie={addMovie} movies={movies.filter(el=> (el.rating >= newRate) && el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))}/>
           <Description movies={movies}/>
    
    
     
    </div>
  );
}

export default App;

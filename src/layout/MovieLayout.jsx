import React from 'react'
import MovieNavBar from '../Components/NavBar/MovieNavBar'

const MovieLayout = (Component) => (...props) => {
  return (
    <div>
      <div>
      <MovieNavBar />
        <Component {...props}/>
        <div>Footer</div>
      </div>
    </div>
  )
}

export default MovieLayout
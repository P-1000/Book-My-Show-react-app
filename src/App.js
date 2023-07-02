import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//router 
import { Routes , Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';
//Layouts : higher order components -

// import DefaultLayout from './layout/DefaultLayout';
// import MovieLayout from './layout/MovieLayout';


function App() {
  return (
   <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<PlayPage/>}/>
   </Routes>
  );
}

export default App;

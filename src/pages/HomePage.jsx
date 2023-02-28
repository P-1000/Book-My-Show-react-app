import React , {useState} from 'react'
import DefaultLayout from '../layout/DefaultLayout';

import EntertainementCard from '../Entertainment/EntertainementCard';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import PosterSliderComponent from '../PosterSlider/PosterSliderComponent';

const HomePage = () => {

  const [recomendedMovies , setRecomendedMovies] = useState([]);
  const [premierMovies , setPremierMovies] = useState([]);
  const [onlineStreamEvents , setOnlineStreamEvents] = useState([]);

  return (

    <>
       <HeroCarousel />

       <div className='container mx-auto px-4 md:px-12 my-8'>
          <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3' >The Best of Entertainement</h1>
       </div>
          <div className='container mx-auto px-4 md:px-12 my-8'>
          <PosterSliderComponent 
          title='Recomended Movies' 
          subject="List Of Recomended Movies"
          poster = "{recomendedMovies}"
          isDark = {false}
          />
       </div>

        <div className='bg-premier-800 py-12' >
          <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
            <div className='hidden md:flex'>
                <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' className='w-full h-full'/>
            </div>
            <PosterSliderComponent 
          title='Premier Movies Movies' 
          subject="Brand New Movies every friday Of"
          poster = "{premierMovies}"
          isDark = {true}
          /> 
          </div>
        </div>

        <div>
        <PosterSliderComponent 
          title='Online Streaming Event' 
          subject=""
          poster = "{onlineStreamigEvents}"
          isDark = {false}
          /> 
        </div>
    </>
  )
}

export default DefaultLayout(HomePage);
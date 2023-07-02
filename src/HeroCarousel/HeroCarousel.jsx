import React , {useState} from 'react'
import HeroSlider from 'react-slick';
import { nextArrow } from './Arrows';
import { prevArrow } from './Arrows';
const HeroCarousel = () => {
  const [images,setImages] =useState([
  {
    "adult": false,
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 505642,
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 3407.581,
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 3538
  },
  {
    "adult": false,
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 505642,
    "original_language": "en",
    "original_title": "Black Panther: Wakanda Forever",
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "popularity": 3407.581,
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "release_date": "2022-11-09",
    "title": "Black Panther: Wakanda Forever",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 3538
  }
]);

  const settingsLg = {
        arrows : true,
        infinite : true,
        speed : 500,
        autoplay : true,
        autoplaySpeed : 2000,
        cssEase : "linear",
        slideToscroll : 1,
        prevArrow : <prevArrow/>,
        nextArrow : <nextArrow/>,
  }

  const settings ={
    arrows : true,
    infinite : true,
    speed : 500,
    slideToscroll : 1,
    autoplay : true,
    autoplaySpeed : 2000,
    cssEase : "linear",
    prevArrow : <prevArrow/>,
    nextArrow : <nextArrow/>,
  }

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {
            images.map((images)=>(
              <div className='w-full h-56 md:h-80 py-3'>
                <img 
                className='w-full h-full rounded-md object-cover' 
                src={`https:/images.tmdb.org/t/p/original${images.backdrop_path}`} 
                alt='Poster'/>
              </div>
            ))
          }
        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
      <HeroSlider {...settingsLg}>
          {
            images.map((images)=>(
              <div className='w-full h-96 px-2 py-3'>
                <img 
                className='w-full h-full rounded-md object-cover' 
                src={`https:/images.tmdb.org/t/p/original${images.backdrop_path}`} 
                alt='Poster'/>
              </div>
            ))
          }
        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousel
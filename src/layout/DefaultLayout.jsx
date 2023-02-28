import React from 'react'
import NavBarComponents from '../Components/NavBar/NavBarComponents'

const DefaultLayout = (Component)=> (...props) => {
  return (
    <div>
      <div>
        <NavBarComponents />
        <Component {...props}/>
        <div>Footer</div>
      </div>
    </div>
  )
}
export default DefaultLayout
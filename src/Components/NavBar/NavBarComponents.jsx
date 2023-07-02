import React from 'react'
import {BiChevronDown , BiMenu ,BiSearch} from 'react-icons/bi';



function NavSm(){
  return (
    <>
    <div className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>It all starts here</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white-400'>
            Hyderbad <BiChevronDown/>
          </span>

        </div>
        <div className='w-8 h-8 '>
          <BiSearch className="w-full h-full" />
        </div>
    </div>
    </>
  )
}

function NavMd (){
  return(
    <>
    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
        <BiSearch/>
        <input type = 'search' className="w-full bg-transparent border-none focus:outline-none"/>
        </div>

    </>
  )
}

function NavLg(){
  return(
    <>
      <div className='container flex mx-auto px-4 py-3 items-center justify-between'>
        <div className='flex items-center w-1/2  gap-3'>
          <div className='w-10 h-10'>
            <img src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png' alt="logo" className='w-full h-full' />
          </div>
          <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md '>
          <input type = 'search' className="w-full bg-transparent border-none focus:outline-none" placeholder='search from movies , events , sports , shows'/>
         
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-200 text-base flex items-center hover:text-white-200 cursor-pointer'>Hyderbad <BiChevronDown /> </span>
        <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
          Sign in
        </button>
        <div className='w-8 h-8 text-white'>
        <BiMenu className='w-full h-full '/>
        </div> 
        </div>
      </div>
    </>
  )
}

const NavBarComponents = () => {
  return (
    <nav className=' bg-darkBackground-700 px-4 py3 ' >
   { /* mobile screen navbar : */ }
    <div className='md:hidden'> 
        <NavSm/>
    </div>
    { /* md or tab  screen navbar : */ }
    <div className='hidden md:flex lg:hidden'>
        <NavMd />
    </div>
    { /* large   screen navbar : */ }
    <div className='hidden md:hidden lg:flex'>
        <NavLg/>
    </div>
    </nav>
  )
}

export default NavBarComponents
import React from 'react'
import { BrowserRouter ,NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <>
       <div id='div'>
        <NavLink  to='/'>    <p>Home</p>  </NavLink>
        <NavLink to='/about'> <p>About</p> </NavLink>
        <NavLink to='/contact'> <p>Contact us</p> </NavLink>            
       </div>
    </>
  )
}

export default Navbar

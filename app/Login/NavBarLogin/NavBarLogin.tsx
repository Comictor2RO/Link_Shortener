import React from 'react'
import NavBarLoginBtn from './NavBarLoginBtn'
import NavBarLoginLogo from './NavBarLoginLogo'
import NavBarLoginBack from './NavBarLoginBack'

const NavBarLogin = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b">
        <NavBarLoginBack/>
        <NavBarLoginLogo/>
        <NavBarLoginBtn/>
    </div>
  )
}

export default NavBarLogin
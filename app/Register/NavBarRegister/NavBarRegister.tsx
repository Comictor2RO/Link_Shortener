import React from 'react'
import NavBarRegisterBtn from './NavBarRegisterBtn'
import NavBarRegisterLogo from './NavBarRegisterLogo'
import NavBarRegisterBack from './NavBarRegisterBack'

const NavBarRegister = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b">
        <NavBarRegisterBack/>
        <NavBarRegisterLogo/>
        <NavBarRegisterBtn/>
    </div>
  )
}

export default NavBarRegister
import React from 'react'
import NavBarThemeSwitch from './NavBarThemeSwitch'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
import NavBarLogo from './NavBarLogo'

const NavBar = () => {
  return (
    <div className="navbar shadow-lg sticky top-0 z-50 border-b">
        <div className="navbar-start">
          <NavBarLogo/>
        </div>
        <div className="navbar-end">
            <NavBarThemeSwitch/>
            <LoginButton/>
            <RegisterButton/>
        </div>
    </div>
  )
}

export default NavBar
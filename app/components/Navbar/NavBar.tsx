import React from 'react'
import NavBarLogo from './NavBarLogo'
import NavBarThemeSwitch from './NavBarThemeSwitch'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

const NavBar = () => {
  return (
    <div className="navbar shadow-sm sticky">
        <div className="navbar-start">

        </div>
        <div className="navbar-center">
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
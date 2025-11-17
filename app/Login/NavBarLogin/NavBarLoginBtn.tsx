import React from 'react'

const NavBarLoginBtn = () => {
  return (
    <div className="navbar-end p-2">
        <a href="./Register">
            <button className="btn-login btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                Register
            </button>
        </a>
    </div>
  )
}

export default NavBarLoginBtn
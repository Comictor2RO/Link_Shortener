import React from 'react'

const NavBarLogin = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b">
        <div className="navbar-start p-2">
            <button className="btn-login btn-xs bg-transparent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                <a href="./">
                    <img src="/arrow.png" alt="Link icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </a>
            </button>
        </div>
        <div className="navbar-center">
            <img src="/Logo.svg" alt="Logo Login icon" className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"/>
        </div>
        <div className="navbar-end p-2">
            <button className="btn-login btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                Register
            </button>
        </div>
    </div>
  )
}

export default NavBarLogin
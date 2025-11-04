import Link from 'next/link'
import React from 'react'

const NavBarLogo = () => {
  return (
    <Link href="/" className="btn btn-ghost text-xs
       sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        <p className="sm:text-sm md:text-md lg:text-lg xl:text-lg">KapooTech</p>
    </Link>
  )
}

export default NavBarLogo
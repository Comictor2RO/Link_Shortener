import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <div className="p-1 md:p-2 lg:p-3 xl:p-4">
    <Link href="/Login" className="btn btn-xs btn-outline sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</Link>
    </div>
  )
}

export default LoginButton
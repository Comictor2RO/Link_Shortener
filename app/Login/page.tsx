import React from 'react'
import NavBarLogin from './NavBarLogin/NavBarLogin'

const LoginPage = () => {
  return (
  <>
    <NavBarLogin/>
    <div className="min-h-screen flex items-center justify-center p-4">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6">
            <legend className="fieldset-legend text-3xl font-bold">Login</legend>
            
            <label className="label mb-1 text-sm font-medium">Email:</label>
            <input type="email" className="input input-bordered w-full" placeholder="Email" />
            <br/>
            <label className="label mb-1 text-sm font-medium">Password:</label>
            <input type="password" className="input input-bordered w-full" placeholder="Password" />
            <br/>
            <button className="btn-body-rounded mt-4 w-full">Login</button>
        </fieldset>
    </div>
  </>
  )
}

export default LoginPage
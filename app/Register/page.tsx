import React from 'react'
import NavBarLogin from './NavBarRegister/NavBarRegister'

const page = () => {
  return (
    <>
        <NavBarLogin/>
        <div className="min-h-screen flex items-center justify-center p-8">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6">
            <legend className="fieldset-legend text-3xl font-bold">Register</legend>
            <br/>
            <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                    <label className="label mb-1 text-sm font-medium">First Name:</label>
                    <input id="firstName" type="text" className="input input-bordered w-full" placeholder="First Name"/>
                </div>

                <div className="flex flex-col flex-1">
                    <label className="label mb-1 text-sm font-medium">Last Name:</label>
                    <input id="lastName" type="text" className="input input-bordered w-full" placeholder="Last Name"/>
                </div>
            </div>
            <br/>
            <label className="label mb-1 text-sm font-medium">Email:</label>
            <input id="email" type="email" className="input input-bordered w-full" placeholder="Email" />
            <br/>
            <label className="label mb-1 text-sm font-medium">Verify Email:</label>
            <input id="verifyEmail" type="email" className="input input-bordered w-full" placeholder="Verify Email" />
            <br/>
            <label className="label mb-1 text-sm font-medium">Password:</label>
            <input id="password" type="password" className="input input-bordered w-full" placeholder="Password" />
            <br/>
            <label className="label mb-1 text-sm font-medium">Verify Password:</label>
            <input id="verifyPassword" type="password" className="input input-bordered w-full" placeholder="Verify Password" />
            <br/>
            <button className="btn-body-rounded mt-4 w-full">Register</button>
        </fieldset>
    </div>
    </>
  )
}

export default page
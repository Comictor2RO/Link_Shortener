import React from 'react'
import CardBody from './CardBody'
import CardActions from './CardActions'

const CardUrl = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
        <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-xl border-2">
            <CardBody/>
            <CardActions/>
        </div>
    </div>
  )
}

export default CardUrl
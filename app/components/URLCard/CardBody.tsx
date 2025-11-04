import React from 'react'
import CardField from './CardField'
import CardTitle from './CardTitle'

const CardBody = () => {
  return (
    <div className="card-body">
        <div className="flex items-center justify-center lg:p-5">
        <CardTitle/>
        </div>
        <div className="flex items-center justify-center p-4">
            <CardField/>
        </div>
    </div>
  )
}

export default CardBody
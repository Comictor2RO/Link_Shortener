import CardBody from './CardBody'
import CardActions from './CardActions'

const CardUrl = () => {
  return (
    <div id="shortener" className="w-full flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-xl border-2">
        <CardBody />
        <CardActions />
      </div>
    </div>
  )
}

export default CardUrl

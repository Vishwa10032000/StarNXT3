import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
        <h2 className='w-100 h-100 d-flex my-5 align-items-center justify-content-center'>404 - Oops! Page Not Found</h2>
        <Link to="/" className="text-decoration-none"><button className='about-button d-block mx-auto mb-5'>Go to Home</button></Link>
    </div>
  )
}

export default NotFoundPage
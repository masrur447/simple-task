
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/task-view" className="mr-5 hover:text-gray-900">Task View</Link>
            <Link to="/contacts" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
    )
}


export default Navbar
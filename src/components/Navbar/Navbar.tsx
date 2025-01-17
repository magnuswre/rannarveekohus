import "./Navbar.css"
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar-Container">
            <div>
                <h2>Ekohuset Rannarve</h2>
            </div>
            <div>
                <Link to="/"><FaHome /></Link>
                <Link to="/contact"><FaPhone /></Link>
            </div>
        </div>
    )
}

export default Navbar
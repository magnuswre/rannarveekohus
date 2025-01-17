import "./Navbar.css"
import { FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar-Container">
            <div>
                <h2>Ekohuset Rannarve</h2>
            </div>
            <div className="Navbar-Links">
                <Link className="Navbar-Links-Home" to="/"><FaHome /></Link>
                <Link className="Navbar-Links-Phone" to="/contact"><FaPhone /></Link>
            </div>
        </div>
    )
}

export default Navbar
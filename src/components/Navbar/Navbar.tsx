import "./Navbar.css"
import { FaPhone, FaHome } from "react-icons/fa";
// import { FaHammer, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar-Container">
            <div>
                <h2>Ekohuset Rannarve</h2>
            </div>
            <div className="Navbar-Links">
                {/* <Link className="Navbar-Links-Info" to="/about"><FaInfo /></Link> */}
                <Link className="Navbar-Links-Home" to="/"><FaHome /></Link>
                <Link className="Navbar-Links-Phone" to="/contact"><FaPhone /></Link>
                {/* <Link className="Navbar-Links-Hammer" to="/construction"><FaHammer /></Link> */}
            </div>
        </div>
    )
}

export default Navbar
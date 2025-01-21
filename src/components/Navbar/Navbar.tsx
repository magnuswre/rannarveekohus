import "./Navbar.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <div className="Navbar-Container">
            <div>
                <h2>Ekohuset Rannarve</h2>
            </div>
            <div className="Navbar-Links">
                <HamburgerMenu />
            </div>
        </div>
    )
}

export default Navbar
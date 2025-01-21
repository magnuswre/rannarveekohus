import React, { useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <button
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            <div className={`menu ${isOpen ? "show" : ""}`}>
                <ul>
                    <li><Link to="/">Hem</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;

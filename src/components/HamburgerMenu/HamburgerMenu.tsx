import React, { useState } from "react";
import "./HamburgerMenu.css";

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
                    <li><a href="/">Hem</a></li>
                    {/* <li><a href="/">Om oss</a></li> */}
                    <li><a href="/contact">Kontakt</a></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;

import React, { useState, useRef, useEffect } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container" ref={menuRef}>
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

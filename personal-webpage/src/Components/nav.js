//This is the main navigation for the website.
import { useState } from 'react';

function NavigationBar () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="navig">
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={isOpen ? 'nav-open' : ''}>
                <li><a href="#scrl1" onClick={closeMenu}>About</a></li>
                <li><a href="#scrl2" onClick={closeMenu}>Experience</a></li>
                <li><a href="#scrl3" onClick={closeMenu}>Projects</a></li>
                <li><a href="#end" onClick={closeMenu}>Contact Me</a></li>
            </ul>
        </div>
    );
}

export default NavigationBar;




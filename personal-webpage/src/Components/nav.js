//This is the main navigation for the website.
import { useState, useEffect, useRef } from 'react';

function NavigationBar () {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click is outside both the menu and hamburger button
            if (
                isOpen &&
                menuRef.current &&
                hamburgerRef.current &&
                !menuRef.current.contains(event.target) &&
                !hamburgerRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        }

        // Close menu on Escape key
        function handleEscapeKey(event) {
            if (event.key === 'Escape' && isOpen) {
                closeMenu();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen]);

    return (
        <div className="navig">
            <button 
                ref={hamburgerRef}
                className={`hamburger ${isOpen ? 'open' : ''}`} 
                onClick={toggleMenu} 
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isOpen && (
                <div 
                    className="nav-backdrop" 
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
            <ul ref={menuRef} className={isOpen ? 'nav-open' : ''}>
                <li><a href="#scrl1" onClick={closeMenu}>About</a></li>
                <li><a href="#scrl2" onClick={closeMenu}>Experience</a></li>
                <li><a href="#scrl3" onClick={closeMenu}>Projects</a></li>
                <li><a href="#end" onClick={closeMenu}>Contact Me</a></li>
            </ul>
        </div>
    );
}

export default NavigationBar;




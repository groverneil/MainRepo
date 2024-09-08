import React, { useState } from 'react';
import styles from './nav.module.css'; // Import the CSS module

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navig} aria-label="Main Navigation">
            {/* Hamburger menu button */}
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                &#9776; {/* Unicode character for the hamburger icon */}
            </button>
            
            {/* Conditionally render the menu based on the isOpen state */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li className={styles.navItem}><a href="#scrl1" className={styles.navLink}>About</a></li>
                <li className={styles.navItem}><a href="#projId" className={styles.navLink}>Projects</a></li>
                <li className={styles.navItem}><a href="#jobs" className={styles.navLink}>Work Experience</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;

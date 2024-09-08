import React, { useState, useRef } from 'react';
import styles from './nav.module.css'; // Import the CSS module

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Function to toggle menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to adjust scroll position
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            // Calculate the offset for smooth scrolling
            const headerOffset = navRef.current ? navRef.current.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
    
            // Ensure the menu closes after clicking a link
            if (isOpen) {
                setTimeout(() => {
                    toggleMenu();
                }, 300); // Wait until the scroll is complete (match with your smooth scroll duration)
            }
        }
    };

    return (
        <nav ref={navRef} className={styles.navig} aria-label="Main Navigation">
            {/* Hamburger menu button */}
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                &#9776; {/* Unicode character for the hamburger icon */}
            </button>
            
            {/* Conditionally render the menu based on the isOpen state */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li className={styles.navItem}>
                    <a href="#scrl1" className={styles.navLink} onClick={handleScroll}>About</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#scrl2" className={styles.navLink} onClick={handleScroll}>Projects</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#scrl3" className={styles.navLink} onClick={handleScroll}>Work Experience</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;

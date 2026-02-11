import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import logoNavbar from '../assets/images/logo-navbar.png';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine text color based on scroll state and mobile menu state
    // If at top and mobile menu is closed (transparent bg), force white text for contrast against Hero image
    // Otherwise use theme text color
    const textColor = !isScrolled && !isOpen ? '#ffffff' : 'var(--text-color)';

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#services' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Contacto', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        // Add delay to allow menu to close and prevent scroll interruption on mobile
        setTimeout(() => {
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                const headerOffset = 80; // Height of fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    };

    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: isScrolled || isOpen ? 'var(--bg-color)' : 'transparent',
            borderBottom: isScrolled || isOpen ? '1px solid var(--border)' : '1px solid transparent',
            padding: '1rem 0', // Rely on .container for horizontal padding
            boxSizing: 'border-box', // Ensure padding doesn't affect width
            transition: 'background-color 0.3s ease, padding 0.3s ease',
            boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" onClick={(e) => handleNavClick(e, '#')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <img src={logoNavbar} alt="Aimé Translations" className="navbar-logo" />
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{ fontWeight: 500, color: textColor }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: textColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none' }}>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: textColor,
                            marginRight: '1rem'
                        }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', color: textColor }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            overflow: 'hidden',
                            backgroundColor: theme === 'dark' ? 'var(--bg-color)' : '#f0f8ff', // Lighter blue tones
                            borderBottom: '1px solid var(--border)'
                        }}
                        className="mobile-menu"
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem 1rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    style={{ fontSize: '1.1rem', fontWeight: 500, paddingLeft: '1rem' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .navbar-logo {
          height: 55px;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        
        @media (min-width: 769px) { 
          .navbar-logo {
            height: 70px; 
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
        </nav>
    );
}

import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import logoNavbar from '../assets/images/logo-navbar.png';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#services' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className="navbar" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'var(--bg-color)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 0',
            transition: 'background-color 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <img src={logoNavbar} alt="Aimé Translations" style={{ height: '50px', objectFit: 'contain' }} />
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontWeight: 500 }}
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
                            color: 'var(--text-color)',
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
                            color: 'var(--text-color)',
                            marginRight: '1rem'
                        }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-color)' }}>
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
                            backgroundColor: theme === 'dark' ? '#303090' : '#f0f8ff', // Lighter blue tones
                            borderBottom: '1px solid var(--border)'
                        }}
                        className="mobile-menu"
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem 1rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
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

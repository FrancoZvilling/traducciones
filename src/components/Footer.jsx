import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import sloganLogo from '../assets/images/slogan-logo.png';
import banner from '../assets/images/banner.png';

// SVG for WhatsApp to replace MessageCircle
const WhatsAppIcon = ({ size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/aimetranslations/', label: 'Instagram' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/rocio-corte/?originalSubdomain=ar', label: 'LinkedIn' },
        { icon: <Mail size={18} />, href: 'mailto:rcorte@aimetranslations.com', label: 'Email' },
        { icon: <WhatsAppIcon size={18} />, href: 'https://wa.me/5493513683990', label: 'WhatsApp' }
    ];

    const quickLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#services' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Contacto', href: '#contact' }
    ];

    return (
        <footer style={{
            position: 'relative',
            backgroundColor: 'var(--bg-color)',
            borderTop: '1px solid var(--border)',
            overflow: 'hidden'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1, // Subtle texture
                zIndex: 0
            }}></div>

            {/* Main Content - Reduced Padding for compactness */}
            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '2.5rem 2rem 1.5rem 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>

                    {/* Brand Column with Copyright included */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.8rem' }}>
                        <img src={sloganLogo} alt="Aimé Translations" style={{ maxWidth: '160px', height: 'auto' }} />
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', maxWidth: '280px', lineHeight: '1.4' }}>
                            Traducciones públicas y servicios lingüísticos con compromiso y precisión profesional.
                        </p>
                        {/* Copyright moved here */}
                        <p style={{ opacity: 0.5, fontSize: '0.75rem', marginTop: '0.5rem' }}>
                            &copy; {new Date().getFullYear()} Aimé Translations.<br />Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Quick Menu */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', position: 'relative', display: 'inline-block' }}>
                            Menú Rápido
                            <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '2px', background: 'var(--secondary)' }}></span>
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
                            {quickLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                                    <a
                                        href={link.href}
                                        className="footer-link"
                                        style={{
                                            opacity: 0.8,
                                            transition: 'opacity 0.2s, transform 0.2s',
                                            display: 'inline-block',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', position: 'relative', display: 'inline-block' }}>
                            Contacto
                            <span style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '2px', background: 'var(--secondary)' }}></span>
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                                ¿Tenés dudas? Escribime a mis redes:
                            </p>
                            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: 'var(--surface)',
                                            border: '1px solid var(--border)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--text-color)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="social-icon"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <p style={{ opacity: 0.5, fontSize: '0.75rem', marginTop: '0.5rem' }}>
                                Desarrollado por <a href="https://wa.me/5493541315119" target="_blank" rel="noopener noreferrer" style={{ color: '#ce4e41', textDecoration: 'none', fontWeight: 500 }}>Franco Zvilling</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Absolute Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    title="Volver arriba"
                    style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        right: '1.5rem',
                        background: 'transparent',
                        border: '1px solid var(--border)',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit',
                        cursor: 'pointer',
                        opacity: 0.6,
                        transition: 'opacity 0.3s, background 0.3s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'var(--surface)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.background = 'transparent'; }}
                >
                    <ArrowUp size={16} />
                </button>
            </div>

            <style>{`
                .footer-link:hover {
                    opacity: 1 !important;
                    transform: translateX(5px);
                    color: var(--secondary);
                }
                .social-icon:hover {
                    background: var(--primary) !important;
                    color: #fff !important;
                    transform: translateY(-3px);
                    border-color: var(--primary) !important;
                }
            `}</style>
        </footer>
    );
}

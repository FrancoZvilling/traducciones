import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';
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


    const socialLinks = [
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/aimetranslations/', label: 'Instagram', text: '@aimetranslations' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/rocio-corte/?originalSubdomain=ar', label: 'LinkedIn', text: 'Rocío Corte' },
        { icon: <Mail size={18} />, href: 'mailto:rcorte@aimetranslations.com', label: 'Email', text: 'rcorte@aimetranslations.com' },
        { icon: <WhatsAppIcon size={18} />, href: 'https://wa.me/5493513683990', label: 'WhatsApp', text: '+54 9 351 368 3990' }
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

            {/* Main Content */}
            <div className="container" style={{ position: 'relative', zIndex: 1, padding: '3rem 2rem 1.5rem 2rem' }}>
                <div className="footer-top" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    paddingBottom: '2.5rem',
                    borderBottom: '1px solid var(--border)'
                }}>

                    {/* Brand Column */}
                    <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <img src={sloganLogo} alt="Aimé Translations" style={{ maxWidth: '180px', height: 'auto' }} />
                        <p style={{ opacity: 0.8, fontSize: '0.95rem', maxWidth: '300px', lineHeight: '1.6' }}>
                            Traducciones públicas y servicios lingüísticos con compromiso y precisión profesional.
                        </p>
                    </div>

                    {/* Quick Menu */}
                    <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', position: 'relative', display: 'inline-block', fontWeight: '600' }}>
                            Menú Rápido
                            <span className="footer-title-line" style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '2px', background: 'var(--secondary)' }}></span>
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer-link"
                                        style={{
                                            opacity: 0.8,
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block',
                                            fontSize: '0.95rem',
                                            color: 'var(--text-color)'
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', position: 'relative', display: 'inline-block', fontWeight: '600' }}>
                            Contacto
                            <span className="footer-title-line" style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '2px', background: 'var(--secondary)' }}></span>
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        color: 'var(--text-color)',
                                        fontSize: '0.95rem',
                                        opacity: 0.8,
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div className="social-icon" style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-color)',
                                        flexShrink: 0
                                    }}>
                                        {social.icon}
                                    </div>
                                    <span>{social.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1.5rem',
                    gap: '1rem',
                    fontSize: '0.85rem',
                    opacity: 0.7
                }}>
                    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Aimé Translations. Todos los derechos reservados.</p>
                    <p style={{ margin: 0 }}>
                        Desarrollado por <a href="https://wa.me/5493541315119" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }}>Franco Zvilling</a>
                    </p>
                </div>
            </div>

            <style>{`
                .footer-link:hover {
                    opacity: 1 !important;
                    transform: translateX(5px);
                    color: var(--secondary) !important;
                }
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover, .footer-link:hover .social-icon {
                    background: var(--primary) !important;
                    color: #fff !important;
                    border-color: var(--primary) !important;
                    transform: translateY(-3px);
                }
                .footer-col {
                    align-items: center;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
}

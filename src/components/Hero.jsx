import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logoNavbar from '../assets/images/logo-navbar.png';

export default function Hero() {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1660927604748-9b039cb31fc1?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            color: '#ffffff',
            paddingTop: '80px' // Offset for fixed navbar to prevent overlapping content
        }}>

            <div className="container">
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <motion.img
                        src={logoNavbar}
                        alt="Aimé Translations"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'block',
                            maxWidth: 'clamp(130px, 40vw, 240px)', // Slightly smaller
                            width: '100%',
                            height: 'auto',
                            marginBottom: '1.5rem'
                        }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1
                        }}
                    >
                        Traducciones Jurídicas <br />
                        <span className="text-gradient">Precisas y Confiables</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '1.25rem',
                            color: '#f0f0f0',
                            opacity: 0.9,
                            marginBottom: '2.5rem',
                            maxWidth: '600px'
                        }}
                    >
                        Servicios profesionales de traducción pública para tus documentos legales, académicos y personales. Avalado por el Colegio de Traductores Públicos de Córdoba.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            Pedir Presupuesto <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn" style={{
                            border: '1px solid #ffffff',
                            color: '#ffffff'
                        }}>
                            Ver Servicios
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

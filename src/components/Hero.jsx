import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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
                            color: 'var(--text-color)',
                            opacity: 0.8,
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
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            Pedir Presupuesto <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn" style={{
                            border: '1px solid var(--border)',
                            color: 'var(--text-color)'
                        }}>
                            Ver Servicios
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

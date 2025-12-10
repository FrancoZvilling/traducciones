import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Laptop } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>

                {/* Content Side */}
                <motion.div
                    style={{ flex: '1 1 500px' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ height: '2px', width: '40px', background: 'var(--secondary)' }}></span>
                        <span style={{ color: 'var(--secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Sobre Aimé</span>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                        Compromiso y Profesionalismo <br /> en cada palabra.
                    </h2>

                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                        Aimé Translations nace de la pasión por conectar culturas y legalidades. Comencé este camino tras asociarme al <strong>Colegio de Traductores Públicos de Córdoba</strong>, con el objetivo de brindar un servicio donde la confianza y la precisión sean los pilares fundamentales.
                    </p>

                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Entiendo la importancia de tus documentos. Ya sea que estés aplicando a una beca, emigrando, o validando trámites personales, mi misión es asegurar que la barrera del idioma no sea un obstáculo.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <Shield size={20} color="var(--primary)" style={{ marginTop: '4px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Confidencialidad</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Tus documentos están seguros.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <CheckCircle2 size={20} color="var(--primary)" style={{ marginTop: '4px' }} />
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Validez Legal</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Firma y sello del Colegio.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Laptop size={20} color="var(--text-color)" />
                            <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Tecnología de Vanguardia</h4>
                        </div>
                        <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                            Utilizo herramientas CAT líderes en la industria como <strong>Trados</strong> y <strong>MemoQ</strong> para garantizar consistencia terminológica y eficiencia en cada proyecto.
                        </p>
                    </div>

                </motion.div>

                {/* Visual Side (Abstract/Image Placeholder) */}
                <motion.div
                    style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{
                        width: '100%',
                        maxWidth: '500px',
                        aspectRatio: '1/1',
                        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg-color) 100%)',
                        borderRadius: '24px',
                        border: '1px solid var(--border)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative Elements */}
                        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', border: '2px solid var(--primary)', opacity: 0.2, borderRadius: '50%' }}></div>
                        <div style={{ position: 'absolute', bottom: '10%', right: '10%', fontSize: '10rem', opacity: 0.05, fontFamily: 'serif', color: 'var(--text-color)' }}>A</div>

                        <div style={{ textAlign: 'center', zIndex: 1 }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Aimé</h3>
                            <p style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Translations</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

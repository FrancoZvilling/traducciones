import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--surface)', overflow: 'hidden', padding: '6rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Reduced min width
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Texto y Enlaces */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                            Hablemos de tu <br />
                            <span className="text-gradient">próximo proyecto</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.8, lineHeight: 1.6 }}>
                            Estoy lista para ayudarte con tus traducciones. Escribime por el medio que prefieras y recibí una respuesta rápida y personalizada.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* WhatsApp Button - Primary */}
                            <a
                                href="https://wa.me/5493513683990?text=Hola,%20vengo%20desde%20tu%20pagina%20web%20y%20quiero%20solicitarte%20un%20presupuesto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link-modern"
                                style={{
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', // WhatsApp colors
                                    color: '#fff',
                                    padding: '1.2rem 2rem',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                                    <MessageCircle size={24} /> WhatsApp
                                </span>
                                <ArrowRight size={20} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/aimetranslations/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link-modern"
                                style={{
                                    background: 'var(--surface)',
                                    color: 'var(--text-color)',
                                    padding: '1.2rem 2rem',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border)',
                                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                                    <span style={{ color: '#E1306C' }}><Instagram size={24} /></span> Instagram
                                </span>
                                <ArrowRight size={20} style={{ opacity: 0.5 }} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:rcorte@aimetranslations.com"
                                className="contact-link-modern"
                                style={{
                                    background: 'var(--surface)',
                                    color: 'var(--text-color)',
                                    padding: '1.2rem 2rem',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border)',
                                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                                    <span style={{ color: '#74a9e8' }}><Mail size={24} /></span> Email
                                </span>
                                <ArrowRight size={20} style={{ opacity: 0.5 }} />
                            </a>

                        </div>
                    </motion.div>

                    {/* Imagen Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Blob Background */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            maxWidth: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                            opacity: 0.2,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 0
                        }}></div>

                        {/* Image Container with Organic Shape */}
                        <div style={{
                            width: '100%',
                            maxWidth: '350px',
                            height: '450px',
                            overflow: 'hidden',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic blob shape
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            position: 'relative',
                            zIndex: 1,
                            background: '#f0f0f0'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Professional Translator"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>



                    </motion.div>

                </div>
            </div>

            <style>{`
                .contact-link-modern:hover {
                    transform: translateX(10px);
                }
                .contact-link-modern:hover svg {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
}

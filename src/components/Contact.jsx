import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                        Empecemos tu proyecto
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.8 }}>
                        ¿Necesitás un presupuesto o tenés alguna duda? Escribime contándome qué documentos necesitás traducir y te responderé a la brevedad.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                        {/* WhatsApp Card */}
                        <a href="https://wa.me/5493512280179?text=Hola,%20vengo%20desde%20tu%20pagina%20web%20y%20quiero%20solicitarte%20un%20presupuesto" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="contact-card" style={{
                                background: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ padding: '1rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '50%', color: '#25D366' }}>
                                    <MessageCircle size={32} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>WhatsApp</h4>
                                    <p style={{ opacity: 0.7 }}>Escribime por WhatsApp</p>
                                </div>
                            </div>
                        </a>

                        {/* Instagram Card */}
                        <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="contact-card" style={{
                                background: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ padding: '1rem', background: 'rgba(225, 48, 108, 0.1)', borderRadius: '50%', color: '#E1306C' }}>
                                    <Instagram size={32} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Instagram</h4>
                                    <p style={{ opacity: 0.7 }}>Seguime en Instagram</p>
                                </div>
                            </div>
                        </a>

                        {/* Email Card (Moved) */}
                        <a href="mailto:contacto@aimetranslations.com" style={{ textDecoration: 'none' }}>
                            <div className="contact-card" style={{
                                background: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ padding: '1rem', background: 'rgba(116, 169, 232, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Email</h4>
                                    <p style={{ opacity: 0.7 }}>contacto@aimetranslations.com</p>
                                </div>
                            </div>
                        </a>

                        {/* Location Card */}
                        <div style={{
                            background: 'var(--bg-color)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{ padding: '1rem', background: 'rgba(116, 169, 232, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Ubicación</h4>
                                <p style={{ opacity: 0.7 }}>Córdoba, Argentina</p>
                            </div>
                        </div>

                    </div>

                    <a href="https://wa.me/5493512280179?text=Hola,%20vengo%20desde%20tu%20pagina%20web%20y%20quiero%20solicitarte%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Solicitar Presupuesto
                    </a>

                </motion.div>
            </div>
            <style>{`
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
        </section>
    );
}

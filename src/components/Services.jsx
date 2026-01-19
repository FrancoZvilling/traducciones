import { motion } from 'framer-motion';
import { FileText, GraduationCap, Gavel, Globe } from 'lucide-react';
import Traquelado from '../assets/images/Traquelado.png';

const services = [
    {
        icon: <Gavel size={32} />,
        title: "Documentos Legales",
        description: "Escrituras, sentencias, poderes y otros documentos notariales."
    },
    {
        icon: <FileText size={32} />,
        title: "Documentos Personales",
        description: "Actas de nacimiento, matrimonio, antecedentes penales, pasaportes, entre otros."
    },
    {
        icon: <GraduationCap size={32} />,
        title: "Documentos Académicos",
        description: "Diplomas, analíticos, programas de estudio, certificaciones y más."
    },
    {
        icon: <Globe size={32} />,
        title: "Documentos de Inmigración y Trabajo",
        description: "Documentación para visas, residencia, aplicaciones laborales y otros trámites."
    }
];

export default function Services() {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Servicios</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                        Soluciones integrales de traducción para cada necesidad, con el compromiso que tus trámites requieren.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundImage: `url(${Traquelado})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                aspectRatio: '0.9', // Maintain aspect ratio (slightly taller than wide)
                                color: '#ffffff',
                                padding: '2rem 1.5rem', // Reduced padding to fit more text
                                overflow: 'hidden', // Prevent size expansion from content
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                cursor: 'default',
                                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                            }}
                            whileHover={{
                                y: -5,
                                filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.3))',
                                transition: { duration: 0.15, ease: 'easeOut' }
                            }}
                        >
                            <div style={{
                                color: '#ffffff',
                                marginBottom: '1.2rem',
                                background: 'rgba(255, 255, 255, 0.2)',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                flexShrink: 0
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.5' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

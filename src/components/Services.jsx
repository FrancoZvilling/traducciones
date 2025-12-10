import { motion } from 'framer-motion';
import { FileText, GraduationCap, Gavel, Globe } from 'lucide-react';

const services = [
    {
        icon: <Gavel size={32} />,
        title: "Documentos Legales",
        description: "Escrituras, sentencias, poderes y otros documentos notariales."
    },
    {
        icon: <FileText size={32} />,
        title: "Documentos Personales",
        description: "Actas de nacimiento, matrimonio, antecedentes penales y pasaportes."
    },
    {
        icon: <GraduationCap size={32} />,
        title: "Académicos",
        description: "Diplomas, analíticos, programas de estudio y certificaciones."
    },
    {
        icon: <Globe size={32} />,
        title: "Inmigración y Trabajo",
        description: "Documentación para visas, residencia y aplicaciones laborales en el exterior."
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
                        Soluciones integrales de traducción para cada necesidad, con la seriedad que tus trámites requieren.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                background: 'rgba(116, 169, 232, 0.1)',
                                width: 'fit-content',
                                padding: '1rem',
                                borderRadius: '50%'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

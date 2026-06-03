import { motion } from 'framer-motion';
import review1 from '../assets/images/reseñas/reseña_1.webp';
import review2 from '../assets/images/reseñas/reseña_2.webp';

export default function Reviews() {
    return (
        <section id="reviews" className="section" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Experiencia y Confianza
                        </h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                            El respaldo más grande que tengo es la satisfacción y confianza de quienes ya eligieron mis servicios. Cada proyecto de traducción se realiza con el más estricto rigor profesional, garantizando precisión terminológica, confidencialidad y entregas a tiempo.
                        </p>
                    </motion.div>
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: '2.5rem',
                    alignItems: 'flex-start'
                }}>
                    {[review1, review2].map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                                maxWidth: '100%',
                                width: '450px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--border)'
                            }}
                            className="review-card"
                        >
                            <img 
                                src={review} 
                                alt={`Reseña de cliente ${index + 1}`} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block' 
                                }} 
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .review-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .review-card:hover {
                    transform: translateY(-5px) !important;
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12) !important;
                }
            `}</style>
        </section>
    );
}

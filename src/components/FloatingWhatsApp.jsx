import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    const whatsappUrl = "https://wa.me/5493512280179?text=Hola,%20vengo%20desde%20tu%20pagina%20web%20y%20quiero%20solicitarte%20un%20presupuesto";

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366', // WhatsApp Green
                color: '#fff',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 9999,
                textDecoration: 'none'
            }}
            whileHover={{ scale: 1.1 }}
        >
            {/* Pulsing effect */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    zIndex: -1
                }}
            />
            <MessageCircle size={32} />
        </motion.a>
    );
}

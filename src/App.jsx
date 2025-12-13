import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import sloganLogo from './assets/images/slogan-logo.png';
import banner from './assets/images/banner.png';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <FloatingWhatsApp />
      </main>

      <footer style={{
        padding: '3rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        marginTop: 0, // Removed margin to sticking to contact
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
        // backgroundColor: 'var(--bg-color)' // Replaced by banner
      }}>
        {/* Overlay for readability if banner is busy */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light overlay to blend with light theme or dark for dark theme? 
          // Better strategy: Use a variable or just a neutral overlay if simpler. 
          // Given the logo is likely dark text (sloganLogo), a light overlay is safer.
          // But wait, user has dark mode. 
          // Let's use var(--bg-color) with opacity!
          backgroundColor: 'var(--bg-color)',
          opacity: 0.85,
          zIndex: 0
        }}></div>

        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          <img src={sloganLogo} alt="Aimé Translations - Slogan" style={{ maxWidth: '200px', height: 'auto', opacity: 0.9 }} />
          <p style={{ opacity: 0.7 }}>&copy; {new Date().getFullYear()} Aimé Translations. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

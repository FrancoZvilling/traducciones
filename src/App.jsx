import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import sloganLogo from './assets/images/slogan-logo.png';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        marginTop: '2rem',
        backgroundColor: 'var(--bg-color)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <img src={sloganLogo} alt="Aimé Translations - Slogan" style={{ maxWidth: '200px', height: 'auto', opacity: 0.9 }} />
          <p style={{ opacity: 0.7 }}>&copy; {new Date().getFullYear()} Aimé Translations. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

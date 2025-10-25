import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      <Hero />
      <Features />
      <FooterCTA />
    </div>
  );
}

export default App;

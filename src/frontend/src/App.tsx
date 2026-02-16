import { Header } from './components/marketing/Header';
import { HeroSection } from './components/marketing/HeroSection';
import { PurposeSection } from './components/marketing/PurposeSection';
import { OfferingsSection } from './components/marketing/OfferingsSection';
import { Footer } from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PurposeSection />
        <OfferingsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Automatization from '@/components/Automatization';
import Services from '@/components/Services';
import Differential from '@/components/Differential';
import AdditionalInfo from '@/components/AdditionalInfo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Automatization />
      <Services />
      <Differential />
      <AdditionalInfo />
      <Contact />
      <Footer />
    </main>
  );
}

import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Benefits } from './components/sections/Benefits';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { BookingForm } from './components/sections/BookingForm';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
